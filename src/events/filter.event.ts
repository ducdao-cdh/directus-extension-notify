import { TypeContextConstructor } from "../types"
import { BaseService } from "../services/"
import { LOGS_COLLECTION, TEMPLATE_COLLECTION } from "../data"

export class FilterServiceClass extends BaseService {
    constructor(filter: any, context: TypeContextConstructor) {
        super({ events: { filter }, context })

        this.filter(`${LOGS_COLLECTION}.items.create`, async (params: any) => {

            let variables = await this.getInjectVariables(params.variables)

            if (!params.template && params.template_name) {
                const templateService = new context.services.ItemsService(TEMPLATE_COLLECTION, {
                    schema: await context.getSchema()
                })

                await templateService.createOne({
                    id: params.template_name,
                    variables,
                }).catch((e: any) => {
                    this.logger.debug({ name: this.name }, "[-] Template already exists : " + params.template_name)
                })

                params.template = params.template_name
            }

            return params
        })
    }
}