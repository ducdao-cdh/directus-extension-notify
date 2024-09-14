import { TypeContextConstructor } from "../types"
import { BaseService, SchemaServiceClass, WorkerServiceClass } from "../services/"
import { LOGS_COLLECTION, SETTING_COLLECTION } from "../data"

export class ActionServiceClass extends BaseService {

    public workerService
    constructor(action: any, context: TypeContextConstructor) {
        super({ events: { action }, context })

        this.workerService = new WorkerServiceClass(this.context)

        this.action(`${SETTING_COLLECTION}.items.update`, async () => {
            let schemaService = new SchemaServiceClass(this.context)
            await schemaService.checkBaseTemplate()
        })

        this.action(`${LOGS_COLLECTION}.items.create`, async () => {
            this.workerService.execQueue()
        })

        this.action(`${LOGS_COLLECTION}.items.update`, () => {
            this.workerService.execQueue()
        })
    }
}