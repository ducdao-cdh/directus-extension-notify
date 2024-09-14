import { InvalidCredentialsError } from '@directus/errors'
export const middlewareAdminAccess = (req: any, res: any, next: any) => {
    let { admin } = req.accountability

    if (admin) {
        return next()
    }

    return next(new InvalidCredentialsError())
}