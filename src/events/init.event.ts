import { TypeContextConstructor } from "../types"
import { BaseService, SchemaServiceClass } from "../services/"

export class InitServiceClass extends BaseService {
    constructor(init: any, context: TypeContextConstructor) {
        super({ events: { init }, context })

        this.init("app.after", async () => {
            let schemaService = new SchemaServiceClass(context)
            await schemaService.migrateSchema()
            await schemaService.checkBaseTemplate()
        })
    }
}