import axios from "axios"
import { TypeContextConstructor, TypePayloadSendMattermost } from "../types"
import { BaseService } from "./base.service"



export class MattermostNotifyServiceClass extends BaseService {
    constructor(context: TypeContextConstructor) {
        super({ context })
    }

    async sendMessageToChannel(url: string, payload: TypePayloadSendMattermost) {

        return axios.post(url, payload, {
            headers: {
                'Content-Type': 'application/json'
            }
        }).catch((e: any) => {
            this.logger.error({ name: this.name }, "[-] Mattermost error: " + e?.message)
            this.logger.debug(e)
        })
    }
}