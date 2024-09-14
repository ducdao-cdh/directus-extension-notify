import { TypeContextConstructor } from "../types"
import { BaseService } from "./base.service"

export class EmailServiceClass extends BaseService {
    constructor(context: TypeContextConstructor) {
        super({ context })
    }
}