import { TypeContextConstructor } from "../types"
import { BaseService } from "../services/"
import { slugifyString } from "../utils"

export class EmitterServiceClass extends BaseService {
    constructor(context: TypeContextConstructor) {
        super({ context })

        this.emitter.onAction("sendNotify", async (payload: {
            template_name: string,
            variables: any,
            emails: Array<string>,
            cc?: Array<string>,
            bcc?: Array<string>
        }) => this.sendNotify(payload.emails, payload.template_name, payload.variables, {
            cc: payload.cc,
            bcc: payload.bcc
        }))
    }

    sendNotify = async (emails: Array<string>, template_name: string, variables: any, opt: any) => {
        try {

            let itemsService = await this.getItemsService([
                "notify_logs",
                "notify_templates"
            ])

            const templateID = slugifyString(template_name)

            let template = await itemsService['notify_templates'].readOne(templateID, {
                fields: ['*']
            })

            if (!template) {
                await itemsService['notify_templates'].createOne({
                    id: templateID,
                    email_enabled: true,
                    subject: template_name,
                    content: template_name
                })
            }

            return itemsService['notify_logs'].createOne({
                status: "pending",
                email_enable: template ? template.email_enable : true,
                mattermost_enable: template ? template.mattermost_enable : false,
                mattermost_status: "pending",
                template: templateID,
                receive_emails: emails,
                variables,
                cc: opt.cc || [],
                bcc: opt.bcc || []
            })
        } catch (error: any) {
            this.logger.error({ name: this.name }, error?.message)
            this.logger.debug(error)
        }
    }
}