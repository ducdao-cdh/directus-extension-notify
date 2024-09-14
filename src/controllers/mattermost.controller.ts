import { InvalidPayloadError } from '@directus/errors'
import { ServiceUnavailableError } from '@directus/errors'
import { TypeContextConstructor } from "../types"
import { BaseService, MattermostNotifyServiceClass } from "../services/"
import { templateParser } from "../utils"
import { middlewareAdminAccess } from "../middlewares"
import { LOGS_COLLECTION, TEMPLATE_COLLECTION } from '../data'

export class MatterMostControllerClass extends MattermostNotifyServiceClass {


    constructor(router: any, context: TypeContextConstructor) {
        super(context)

        router.post("/mattermost",
            middlewareAdminAccess,
            async (req: any, res: any, next: any) => {

                let { template, variables, payload } = req.body

                let webhook_mattermost = this.env['MATTERMOST_WEBHOOK_URL']

                if (!webhook_mattermost) {
                    return next(new ServiceUnavailableError({
                        reason: "Webhook Mattermost not configured",
                        service: "Controller Mattermost"
                    }))
                }

                let itemService = await this.getItemsService([TEMPLATE_COLLECTION])

                let templateItem = await itemService.readOne(template, {
                    fields: [
                        "channels",
                        "mattermost_enable",
                        "mattermost_content",
                    ]
                })

                if (!templateItem) {
                    return next(new InvalidPayloadError({
                        reason: "Template not found",
                    }))
                }


                if (!templateItem.mattermost_enable) {
                    return next(new InvalidPayloadError({
                        reason: "Template not enable",
                    }))
                }

                await Promise.all(templateItem.channels.map(async (channel: any) => {
                    let content = templateParser(templateItem.mattermost_content, variables)
                    return this.sendMessageToChannel(webhook_mattermost, {
                        ...payload,
                        content,
                        channel
                    })
                }))


                return res.status(201).send()
            })
    }
}