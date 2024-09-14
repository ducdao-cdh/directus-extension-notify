import { TypeContextConstructor, TypeEventsConstructor } from "../types"
import { checkValidEmail, ensureLoop, Url } from "../utils/"

export class BaseService {
    public events: any
    public context: any
    public redis: any

    public emitter: any
    public action: any
    public filter: any
    public schedule: any
    public init: any

    public database: any
    public logger: any
    public services: any
    public getSchema: any
    public env: any


    public name = "Power Notify v2"


    constructor(params: { events?: TypeEventsConstructor, context: TypeContextConstructor, redis?: any }) {
        this.events = params?.events
        this.context = params?.context
        this.redis = params?.redis

        this.database = this.context?.database
        this.services = this.context?.services
        this.getSchema = this.context?.getSchema
        this.logger = this.context?.logger
        this.env = this.context?.env
        this.emitter = this.context?.emitter

        this.filter = this.events?.filter
        this.action = this.events?.action
        this.schedule = this.events?.schedule
        this.init = this.events?.init
    }

    async getItemsService(collections: string[]) {
        const schema = await this.getSchema()

        let itemsService = collections.reduce((pre: any, current: any) => {
            pre[current] = new this.services.ItemsService(current, {
                knex: this.database,
                schema
            })
            return pre
        }, {})

        return itemsService
    }

    async getInjectVariables(variables: Object) {
        let projectSettings = await this.getProjectSettings([
            'project_name',
            'project_url',
            'project_descriptor',
            'project_logo',
            'project_color',
        ])

        return {
            ...variables,
            backendUrl: this.env['PUBLIC_URL'] ?? '',
            frontendUrl: this.env['FRONTEND_URL'] ?? '',
            projectName: projectSettings?.project_name,
            projectDescriptor: projectSettings?.project_descriptor,
            projectUrl: projectSettings?.project_url,
            projectLogo: this.getProjectLogoURL(projectSettings?.project_logo),
            projectColor: projectSettings?.project_color,
        }
    }


    getProjectSettings = async (fields: string[] = []) => {
        const settingsService = new this.services.ItemsService("directus_settings", {
            schema: await this.getSchema()
        })

        return settingsService.readSingleton({ fields }).catch((e: any) => {
            this.logger.error({ name: this.name }, "Error getProjectSettings")
            this.logger.debug(e)
            return {}
        })
    }

    getProjectLogoURL = (logoID?: string,) => {
        const projectLogoUrl = new Url(this.env['PUBLIC_URL'] as string)

        if (logoID) {
            projectLogoUrl.addPath('assets', logoID)
        } else {
            projectLogoUrl.addPath('admin', 'img', 'directus-white.png')
        }

        return projectLogoUrl.toString()
    }


    processParamsMail = (send: any) => {
        const emailDev = this.env['EMAIL_DEVELOPMENT']

        if (emailDev) {
            if (send.to.length > 0) {
                send.to = [emailDev]
            }
            if ((send?.cc ?? []).length > 0) {
                send.cc = [emailDev]
            }
            if ((send?.bcc ?? []).length > 0) {
                send.bcc = [emailDev]
            }

            this.logger.debug({ name: this.name }, '[!] Send.to: ', send)

            return send
        }

        const filterValidEmails = (emailArray: string[]) => {
            // Sử dụng hàm filter để giữ lại chỉ các địa chỉ email hợp lệ
            return emailArray.filter((email) => checkValidEmail(email))
        }

        return {
            to: ensureLoop(send.cc) ? filterValidEmails(send.to) : [send.to],
            cc: (send.cc && ensureLoop(send.cc)) ? filterValidEmails(send.cc) : [],
            bcc: (send.bcc && ensureLoop(send.bcc)) ? filterValidEmails(send.bcc) : []
        }
    }
}