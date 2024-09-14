import { defineHook } from '@directus/extensions-sdk'
import { ActionServiceClass, EmitterServiceClass, FilterServiceClass, InitServiceClass } from '../../events'

export default defineHook(({ filter, action, init }, context) => {

	new ActionServiceClass(action, context)
	new FilterServiceClass(filter, context)
	new InitServiceClass(init, context)
	new EmitterServiceClass(context)
})
