import { InvalidPayloadError } from '@directus/errors'
import { ServiceUnavailableError } from '@directus/errors'
import { TypeContextConstructor } from "../types"
import { BaseService } from "../services/"
import { middlewareAdminAccess } from "../middlewares"
import { TEMPLATE_COLLECTION } from '../data'
import { templateParser } from '../utils'

export class MailControllerClass extends BaseService {
    constructor(router: any, context: TypeContextConstructor) {
        super({ context })

        router.post("/email",
            middlewareAdminAccess,
            async (req: any, res: any, next: any) => {

                let { template, variables, emails, cc, bcc } = req.body

                let itemService = await this.getItemsService([TEMPLATE_COLLECTION])

                let templateItem = await itemService.readOne(template, {
                    fields: [
                        "email_enable",
                        "cc_admin",
                        "subject",
                        "content",
                    ]
                })

                if (!templateItem) {
                    return next(new InvalidPayloadError({
                        reason: "Template not found",
                    }))
                }

                if (!templateItem.email_enable) {
                    return next(new InvalidPayloadError({
                        reason: "Template not enable",
                    }))
                }


                this.emitter.emitAction('sendNotify', {
                    template_name: template,
                    variables,
                    emails,
                    cc,
                    bcc
                })

                return res.status(201).send()
            })
    }
}