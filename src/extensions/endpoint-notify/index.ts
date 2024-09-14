import { defineEndpoint } from '@directus/extensions-sdk'
import { MailControllerClass, MatterMostControllerClass } from '../../controllers'

export default defineEndpoint((router, context) => {
	new MatterMostControllerClass(router, context)
	new MailControllerClass(router, context)
})
