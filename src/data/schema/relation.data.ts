import { LOGS_COLLECTION, TEMPLATE_COLLECTION } from "./name.data"

export const relations = [
    {
        "collection": LOGS_COLLECTION,
        "field": "template",
        "related_collection": TEMPLATE_COLLECTION,
        "schema": {
            "constraint_name": `${LOGS_COLLECTION}_template_foreign`,
            "table": LOGS_COLLECTION,
            // "column": "template",
            "foreign_key_schema": "public",
            "foreign_key_table": TEMPLATE_COLLECTION,
            "foreign_key_column": "id",
            "on_update": "NO ACTION",
            "on_delete": "SET NULL"
        },
        "meta": {
            "many_collection": LOGS_COLLECTION,
            "many_field": "template",
            "one_collection": TEMPLATE_COLLECTION,
            "one_field": LOGS_COLLECTION,
            "one_collection_field": null,
            "one_allowed_collections": null,
            "junction_field": null,
            "sort_field": null,
            "one_deselect_action": "nullify"
        }
    }
]