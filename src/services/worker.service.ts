import { LOGS_COLLECTION, SETTING_COLLECTION } from "../data"
import { TypeContextConstructor } from "../types"
import { templateParser } from "../utils"
import { BaseService } from "./base.service"
import { MattermostNotifyServiceClass } from "./mattermost.service"

export class WorkerServiceClass extends BaseService {


    public stepTimeout = 10 * 60 * 1000

    public webhookMattermost: string
    constructor(context: TypeContextConstructor) {
        super({ context })
        this.webhookMattermost = this.env['MATTERMOST_WEBHOOK_URL']
    }


    async execQueue() {

        if (this.env['POWER_NOTIFY_STATUS'] == 'running') {
            this.logger.debug({ name: this.name }, "Worker already running")
            return
        }

        this.env['POWER_NOTIFY_STATUS'] = 'running'

        let items = await this.getItemsLog()

        let itemsEmail = items.filter((item: any) => item.template.email_enable)
        let itemsMattermost = items.filter((item: any) => item.template.mattermost_enable)

        while (itemsEmail.length > 0) {
            let item = itemsEmail.shift()

            this.logger.debug({ name: this.name }, "Worker executing email: " + item.id)

            await this.runSendEmail(item).catch((e: any) => {
                this.logger.error({ name: this.name }, e?.message)
            })

            items = await this.getItemsLog()
            itemsEmail = items.filter((item: any) => item.template.email_enable === true && item.status === 'pending')
        }


        while (itemsMattermost.length > 0) {
            let item = itemsMattermost.shift()

            this.logger.debug({ name: this.name }, "Worker executing mattermost: " + item.id)

            await this.runSendNotifyMattermost(item).catch((e: any) => {
                this.logger.error({ name: this.name }, e?.message)
            })

            items = await this.getItemsLog()
            itemsMattermost = items.filter((item: any) => item.template.mattermost_enable === true && item.mattermost_status === 'pending')
        }


        this.env['POWER_NOTIFY_STATUS'] = 'pending'

    }




    async runSendNotifyMattermost(item: any) {
        let {
            mattermost_enable,
            channels,
            mattermost_content
        } = item.template

        let url = this.webhookMattermost

        if (!mattermost_enable || !url) return

        let variablesInject = await this.getInjectVariables(item.variables)


        mattermost_content = templateParser(mattermost_content || "", variablesInject)

        let itemsService = await this.getItemsService([
            LOGS_COLLECTION
        ])

        let mattermostService = new MattermostNotifyServiceClass(this.context)

        return Promise.all(
            channels.map(async (channel: any) =>
                mattermostService.sendMessageToChannel(url, {
                    channel: channel.path,
                    text: mattermost_content,
                    priority: {
                        "priority": "important",
                        "requested_ack": true
                    }
                })
            )
        ).then(async () => {

            return itemsService[LOGS_COLLECTION].updateOne(item.id, {
                mattermost_status: "sent",
                channels,
                mattermost_content: mattermost_content,
                meta: [
                    ...(item?.meta ?? []),
                    {
                        type: "mattermost",
                        key: "Success",
                        value: "Send success !"
                    }
                ]
            }, {
                autoPurgeCache: true,
                emitEvents: false
            })

        }).catch(async (e: any) => {
            this.logger.error({ name: this.name }, "Error runSendNotifyMattermost")
            this.logger.debug(e)


            return itemsService[LOGS_COLLECTION].updateOne(item.id, {
                mattermost_status: "error",
                channels,
                mattermost_content: mattermost_content,
                meta: [
                    ...(item?.meta ?? []),
                    {
                        type: "mattermost",
                        key: "Error",
                        value: e?.message || ""
                    }
                ]
            }, {
                autoPurgeCache: true,
                emitEvents: false
            })
        })

    }

    async runSendEmail(item: any) {
        let {
            template,
            receive_emails,
            variables,
            cc,
            bcc
        } = item

        let itemsService = await this.getItemsService([
            SETTING_COLLECTION,
            LOGS_COLLECTION
        ])

        if (template.cc_admin) {

            const {
                email_admin
            } = await itemsService[SETTING_COLLECTION].readSingleton({
                fields: ['email_admin']
            }).catch((e: any) => {
                this.logger.error({ name: this.name }, e?.message)
                this.logger.debug(e)
                return {}
            })

            if (email_admin && Array.isArray(email_admin) && email_admin.length > 0) {
                cc = [
                    ...cc ?? [],
                    ...email_admin
                ]
            }
        }

        let {
            subject,
            content,
            cc_custom,
            bcc_custom,
            to_custom
        } = template

        let variablesInject = await this.getInjectVariables(variables)

        try {
            subject = templateParser(subject, variablesInject)
            content = templateParser(content, variablesInject)
        } catch (e: any) {

            this.logger.error({ name: this.name }, e?.message)

            return {
                status: false,
                message: e.message,
                email_payload: {}
            }
        }


        const mailService = new this.services.MailService({
            schema: await this.getSchema(),
            knex: this.database,
        })

        const _emails = {
            to: [
                ...receive_emails,
                ...(to_custom ?? [])
            ],
            cc: [
                ...(cc ?? []),
                ...(cc_custom ?? [])
            ],
            bcc: [
                ...(bcc ?? []),
                ...(bcc_custom ?? [])
            ]
        }

        this.logger.debug({ name: this.name }, "Emails: " + JSON.stringify(_emails) + " Subject: " + subject)

        const emails = this.processParamsMail(_emails)

        // this.logger.debug({ emails })

        let info: any = {
            ...emails,
            subject,
            template: {
                name: 'base',
                data: {
                    base_url: process.env.PUBLIC_URL ?? '',
                    html: content
                },
            },
        }

        // this.logger.debug({ info })

        const {
            status,
            message,
            email_payload
        } = await mailService.send(info)
            .then(() => {
                return {
                    status: true,
                    message: "Email sent",
                    email_payload: {
                        ...info,
                        content
                    }
                }
            })
            .catch((e: any) => {
                this.logger.debug({ name: this.name }, "[-] Email Run " + e?.message)
                return {
                    status: false,
                    message: e?.message,
                    email_payload: {
                        ...info,
                        content
                    }
                }
            })

        let statusValue = status ? "Success" : "Error"

        const meta = [
            {
                type: "email",
                key: statusValue,
                value: message
            },
            ...(item?.meta || []),
        ]


        // this.logger.debug({
        //     id: item.id,
        //     status: status === true ? "sent" : "error",
        //     subject: email_payload.subject,
        //     content: email_payload.content,
        //     variables,
        //     template: {
        //         id: item?.template?.id,
        //         variables: variablesInject
        //     },
        //     meta
        // })

        return itemsService[LOGS_COLLECTION].updateOne(item.id, {
            status: status === true ? "sent" : "error",
            subject: email_payload.subject,
            content: email_payload.content,
            receive_emails: emails.to,
            variables,
            template: {
                id: item?.template?.id,
                variables: variablesInject
            },
            meta
        }, {
            autoPurgeCache: true,
            emitEvents: false
        }).catch((e: any) => {
            this.logger.error({ name: this.name }, "Error runSendEmail")
            this.logger.debug(e)
        })
    }

    async getItemsLog() {
        let schema = await this.getSchema()

        const service = new this.services.ItemsService(LOGS_COLLECTION, {
            schema
        })

        return service.readByQuery({
            filter: {
                _and: [
                    {
                        _or: [
                            {
                                schedule_sent: {
                                    _lte: '$NOW'
                                }
                            },
                            {
                                schedule_sent: {
                                    _null: true
                                }
                            }
                        ]
                    },
                    {
                        _or: [
                            {
                                _and: [
                                    {
                                        status: {
                                            _eq: "pending"
                                        }
                                    },
                                    {
                                        email_enable: {
                                            _eq: true
                                        }
                                    }
                                ]

                            },
                            {
                                _and: [
                                    {
                                        mattermost_status: {
                                            _eq: "pending"
                                        }
                                    },
                                    {
                                        mattermost_enable: {
                                            _eq: true
                                        }
                                    }
                                ]

                            },
                        ]
                    }
                ],

            },
            fields: [
                'id',
                'status',
                'schedule_sent',
                'variables',
                'receive_emails',
                'cc',
                'bcc',
                'subject',
                'content',
                'meta',
                'channels',
                'mattermost_content',
                'template.*',
            ],
            limit: -1,
            sort: ['date_created']
        })
    }
}