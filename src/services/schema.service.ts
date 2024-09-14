import { TypeContextConstructor } from "../types"
import { BaseService } from "./base.service"
import { collections, relations, SETTING_COLLECTION, templateBase } from "../data"
import path from 'path'
import * as fs from "fs"

export class SchemaServiceClass extends BaseService {
    constructor(context: TypeContextConstructor) {
        super({ context })
    }

    async migrateSchema() {
        await this.migrateCollections()
        await this.migrateFields()
        await this.migrateRelations()

        this.logger.info({
            name: this.name
        }, `[!] Initial schema success !`)
    }

    async checkBaseTemplate() {
        const service = new this.services.ItemsService(SETTING_COLLECTION, {
            schema: await this.getSchema()
        })

        const model = await service.readSingleton({
            fields: ['use_custom_base', 'base_template']
        })

        if (model.use_custom_base) {
            const dirPath = path.resolve(this.env['EXTENSIONS_PATH'], 'templates')
            const templatePath = path.resolve(this.env['EXTENSIONS_PATH'], 'templates/base.liquid')
            const contentFile = templateBase.replace("{{html}}", model.base_template)

            fs.mkdir(dirPath, { recursive: true }, (err) => { })

            await fs.writeFileSync(templatePath, contentFile)

            this.logger.debug({ name: this.name }, "Base template updated: " + templatePath)
        }
    }


    async migrateCollections() {
        const collectionService = new this.services.CollectionsService({
            schema: await this.getSchema()
        })

        this.logger.info({ name: this.name, }, '[!] Checking collections ...')

        const collectionsData = await this.database('directus_collections')
            .select('collection')
            .whereIn('collection', collections.map((item: any) => item.collection))

        let collectionsCreate = collections.filter((item: any) => !collectionsData.some((ite: any) => ite.collection === item.collection))

        if (collectionsCreate.length === 0) {
            this.logger.info({ name: this.name }, `[!] Collections are exist: ${collections.map((item: any) => item.collection).join(" , ")}`)
        } else {
            for (let collection of collectionsCreate) {
                let { fields, ...keys } = collection

                let primaryField = fields?.find(item => item.schema?.is_primary_key === true)

                await collectionService.createOne({
                    ...keys,
                    fields: [primaryField]
                })
                this.logger.debug({
                    name: this.name
                }, `[+] Created collection: ${keys.collection}`)
            }
        }

    }

    async migrateFields() {
        const fieldsData = await this.database('directus_fields')
            .select('collection', 'field')
            .whereIn('collection', collections.map((item: any) => item.collection))

        const fields = collections.reduce((pre: any, current: any) => {
            return [
                ...pre,
                ...(current?.fields ?? [])
            ]
        }, [])


        this.logger.info({
            name: this.name
        }, '[!] Checking fields ...')

        let fieldsCreated = fields.filter((item: any) => !fieldsData.some((ite: any) => ite.collection === item.collection && ite.field === item.field))

        if (fieldsCreated.length === 0) {
            this.logger.info({
                name: this.name
            }, `[!] Fields are exist`)
        } else {

            let fieldService = new this.services.FieldsService({
                schema: await this.getSchema()
            })

            let fieldsAlias = fieldsCreated?.filter((item: any) => item?.meta?.special?.some((ite: any) => ite === 'm2o' || ite === 'o2m' || ite === 'm2m')) || []
            fieldsCreated = fieldsCreated?.filter((item: any) => !fieldsAlias?.some((ite: any) => ite.field === item.field)) || []

            for (let field of fieldsCreated) {
                let { collection, ...keys } = field
                await fieldService.createField(collection, keys)
                this.logger.debug({
                    name: this.name
                }, `[+] Created field "${keys.field}" collection "${collection}"`)
            }

            if (fieldsAlias.length > 0) {
                fieldsAlias = fieldsAlias.sort((a, b) => {
                    if (a.meta?.special?.some((ite: any) => ite === 'm2o') && !b.meta?.special?.some((ite: any) => ite === 'm2o')) {
                        return -1
                    }
                    if (!a.meta?.special?.some((ite: any) => ite === 'm2o') && b.meta?.special?.some((ite: any) => ite === 'm2o')) {
                        return 1
                    }
                    return 0
                })

                let fieldService = new this.services.FieldsService({
                    schema: await this.getSchema()
                })

                for (let field of fieldsAlias) {
                    let { collection, ...keys } = field
                    await fieldService.createField(collection, keys)

                    this.logger.debug({
                        name: this.name
                    }, `[+] Created field alias "${keys.field}" collection "${collection}"`)
                }
            }
        }

    }

    async migrateRelations() {
        this.logger.debug({
            name: this.name
        }, '[!] Checking relations ...')

        const relationsData = await this.database('directus_relations')
            .select('many_collection', 'one_collection')
            .whereIn('many_collection', collections.map((item: any) => item.collection))
            .orWhereIn('one_collection', collections.map((item: any) => item.collection))

        const relationsCreated = relations.filter((item: any) => !relationsData.some((ite: any) => ite.many_collection === item.collection || ite.one_collection === item.collection))

        if (relationsCreated.length === 0) {
            this.logger.info({
                name: this.name
            }, `[!] Relations are exist`)
        } else {
            let schema = await this.getSchema()
            const relationService = new this.services.RelationsService({
                schema
            })

            for (let relation of relationsCreated) {
                await relationService.createOne(relation)

                this.logger.debug({
                    name: this.name
                }, `[!] Created relation "${relation.field}": "${relation.collection}" -> "${relation.related_collection}"`)
            }
        }
    }
}