import slugify from 'slugify'
import Handlebars from "handlebars"

export * from './url'

export const templateParser = (templateString: string, variables: object) => {
    const template = Handlebars.compile(templateString)
    return template(variables)
}

export const ensureLoop = (variable: any) => {
    return Array.isArray(variable) && variable.filter !== undefined && typeof variable.filter === 'function'
}


export const checkValidEmail = (email: string): boolean => {
    const emailRegExp =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    return emailRegExp.test(email)
}


export const slugifyString = (str: string) => {
    return slugify(str, {
        replacement: '_',  // Thay thế khoảng trắng bằng dấu gạch dưới
        lower: false,      // Không chuyển đổi sang chữ thường
        strict: true,      // Loại bỏ các ký tự đặc biệt
        locale: 'vi'       // Hỗ trợ ngôn ngữ tiếng Việt
    }).toUpperCase()    // Chuyển chuỗi thành chữ hoa
}