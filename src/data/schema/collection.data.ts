import { GROUP_COLLECTION, LOGS_COLLECTION, SETTING_COLLECTION, TEMPLATE_COLLECTION } from "../schema/name.data"

export const collections = [
    {
        "collection": GROUP_COLLECTION,
        "meta": {
            "collection": GROUP_COLLECTION,
            "icon": "video_stable",
            "note": null,
            "display_template": null,
            "hidden": false,
            "singleton": false,
            "translations": null,
            "archive_field": null,
            "archive_app_filter": true,
            "archive_value": null,
            "unarchive_value": null,
            "sort_field": null,
            "accountability": "all",
            "color": "#E35169",
            "item_duplication_fields": null,
            "sort": 6,
            "group": null,
            "collapse": "open",
            "preview_url": null,
            "versioning": false
        },
        "schema": null
    },
    {
        "collection": SETTING_COLLECTION,
        "meta": {
            "collection": SETTING_COLLECTION,
            "icon": null,
            "note": null,
            "display_template": null,
            "hidden": false,
            "singleton": true,
            "translations": null,
            "archive_field": null,
            "archive_app_filter": true,
            "archive_value": null,
            "unarchive_value": null,
            "sort_field": null,
            "accountability": "all",
            "color": null,
            "item_duplication_fields": null,
            "sort": 2,
            "group": GROUP_COLLECTION,
            "collapse": "open",
            "preview_url": null,
            "versioning": false
        },
        "fields": [
            {
                "collection": SETTING_COLLECTION,
                "field": "id",
                "type": "integer",
                "schema": {
                    "name": "id",
                    "table": SETTING_COLLECTION,
                    "schema": "public",
                    "data_type": "integer",
                    "is_nullable": false,
                    "generation_expression": null,
                    "default_value": `nextval('${SETTING_COLLECTION}_id_seq'::regclass)`,
                    "is_generated": false,
                    "max_length": null,
                    "comment": null,
                    "numeric_precision": 32,
                    "numeric_scale": 0,
                    "is_unique": true,
                    "is_primary_key": true,
                    "has_auto_increment": true,
                    "foreign_key_schema": null,
                    "foreign_key_table": null,
                    "foreign_key_column": null
                },
                "meta": {
                    "collection": SETTING_COLLECTION,
                    "field": "id",
                    "special": null,
                    "interface": "input",
                    "options": null,
                    "display": null,
                    "display_options": null,
                    "readonly": true,
                    "hidden": true,
                    "sort": 1,
                    "width": "full",
                    "translations": null,
                    "note": null,
                    "conditions": null,
                    "required": false,
                    "group": null,
                    "validation": null,
                    "validation_message": null
                }
            },
            {
                "collection": SETTING_COLLECTION,
                "field": "base_template",
                "type": "text",
                "schema": {
                    "name": "base_template",
                    "table": SETTING_COLLECTION,
                    "schema": "public",
                    "data_type": "text",
                    "is_nullable": true,
                    "generation_expression": null,
                    "default_value": null,
                    "is_generated": false,
                    "max_length": null,
                    "comment": null,
                    "numeric_precision": null,
                    "numeric_scale": null,
                    "is_unique": false,
                    "is_primary_key": false,
                    "has_auto_increment": false,
                    "foreign_key_schema": null,
                    "foreign_key_table": null,
                    "foreign_key_column": null
                },
                "meta": {
                    "collection": SETTING_COLLECTION,
                    "field": "base_template",
                    "special": null,
                    "interface": "input-rich-text-html",
                    "options": null,
                    "display": null,
                    "display_options": null,
                    "readonly": false,
                    "hidden": false,
                    "sort": 4,
                    "width": "full",
                    "translations": null,
                    "note": null,
                    "conditions": null,
                    "required": false,
                    "group": null,
                    "validation": null,
                    "validation_message": null
                }
            },
            {
                "collection": SETTING_COLLECTION,
                "field": "email_admin",
                "type": "json",
                "schema": {
                    "name": "email_admin",
                    "table": SETTING_COLLECTION,
                    "schema": "public",
                    "data_type": "json",
                    "is_nullable": true,
                    "generation_expression": null,
                    "default_value": null,
                    "is_generated": false,
                    "max_length": null,
                    "comment": null,
                    "numeric_precision": null,
                    "numeric_scale": null,
                    "is_unique": false,
                    "is_primary_key": false,
                    "has_auto_increment": false,
                    "foreign_key_schema": null,
                    "foreign_key_table": null,
                    "foreign_key_column": null
                },
                "meta": {
                    "collection": SETTING_COLLECTION,
                    "field": "email_admin",
                    "special": [
                        "cast-json"
                    ],
                    "interface": "tags",
                    "options": null,
                    "display": null,
                    "display_options": null,
                    "readonly": false,
                    "hidden": false,
                    "sort": 2,
                    "width": "full",
                    "translations": null,
                    "note": null,
                    "conditions": null,
                    "required": false,
                    "group": null,
                    "validation": null,
                    "validation_message": null
                }
            },
            {
                "collection": SETTING_COLLECTION,
                "field": "use_custom_base",
                "type": "boolean",
                "schema": {
                    "name": "use_custom_base",
                    "table": SETTING_COLLECTION,
                    "schema": "public",
                    "data_type": "boolean",
                    "is_nullable": true,
                    "generation_expression": null,
                    "default_value": true,
                    "is_generated": false,
                    "max_length": null,
                    "comment": null,
                    "numeric_precision": null,
                    "numeric_scale": null,
                    "is_unique": false,
                    "is_primary_key": false,
                    "has_auto_increment": false,
                    "foreign_key_schema": null,
                    "foreign_key_table": null,
                    "foreign_key_column": null
                },
                "meta": {
                    "collection": SETTING_COLLECTION,
                    "field": "use_custom_base",
                    "special": [
                        "cast-boolean"
                    ],
                    "interface": "boolean",
                    "options": null,
                    "display": null,
                    "display_options": null,
                    "readonly": false,
                    "hidden": false,
                    "sort": 3,
                    "width": "full",
                    "translations": null,
                    "note": "If enable, on init app, we create extensions/templates/base.liquid, with content from base_template field",
                    "conditions": null,
                    "required": false,
                    "group": null,
                    "validation": null,
                    "validation_message": null
                }
            }
        ],
        "schema": {
            "schema": "public",
            "name": SETTING_COLLECTION,
            "comment": null
        }
    },
    {
        "collection": TEMPLATE_COLLECTION,
        "meta": {
            "collection": TEMPLATE_COLLECTION,
            "icon": null,
            "note": null,
            "display_template": null,
            "hidden": false,
            "singleton": false,
            "translations": null,
            "archive_field": null,
            "archive_app_filter": true,
            "archive_value": null,
            "unarchive_value": null,
            "sort_field": null,
            "accountability": "all",
            "color": null,
            "item_duplication_fields": null,
            "sort": 1,
            "group": GROUP_COLLECTION,
            "collapse": "open",
            "preview_url": null,
            "versioning": false
        },
        "fields": [
            {
                "collection": TEMPLATE_COLLECTION,
                "field": "id",
                "type": "text",
                "schema": {
                    "name": "id",
                    "table": TEMPLATE_COLLECTION,
                    "schema": "public",
                    "data_type": "text",
                    "is_nullable": false,
                    "generation_expression": null,
                    "default_value": "",
                    "is_generated": false,
                    "max_length": null,
                    "comment": null,
                    "numeric_precision": null,
                    "numeric_scale": null,
                    "is_unique": true,
                    "is_primary_key": true,
                    "has_auto_increment": false,
                    "foreign_key_schema": null,
                    "foreign_key_table": null,
                    "foreign_key_column": null
                },
                "meta": {

                    "collection": TEMPLATE_COLLECTION,
                    "field": "id",
                    "special": null,
                    "interface": "input",
                    "options": null,
                    "display": "formatted-value",
                    "display_options": null,
                    "readonly": false,
                    "hidden": false,
                    "sort": 1,
                    "width": "full",
                    "translations": null,
                    "note": null,
                    "conditions": null,
                    "required": false,
                    "group": null,
                    "validation": null,
                    "validation_message": null
                }
            },
            {
                "collection": TEMPLATE_COLLECTION,
                "field": "subject",
                "type": "string",
                "schema": {
                    "name": "subject",
                    "table": TEMPLATE_COLLECTION,
                    "schema": "public",
                    "data_type": "character varying",
                    "is_nullable": true,
                    "generation_expression": null,
                    "default_value": null,
                    "is_generated": false,
                    "max_length": 500,
                    "comment": null,
                    "numeric_precision": null,
                    "numeric_scale": null,
                    "is_unique": false,
                    "is_primary_key": false,
                    "has_auto_increment": false,
                    "foreign_key_schema": null,
                    "foreign_key_table": null,
                    "foreign_key_column": null
                },
                "meta": {

                    "collection": TEMPLATE_COLLECTION,
                    "field": "subject",
                    "special": null,
                    "interface": "input",
                    "options": null,
                    "display": null,
                    "display_options": null,
                    "readonly": false,
                    "hidden": false,
                    "sort": 5,
                    "width": "full",
                    "translations": null,
                    "note": null,
                    "conditions": null,
                    "required": false,
                    "group": "ForEmail",
                    "validation": null,
                    "validation_message": null
                }
            },
            {
                "collection": TEMPLATE_COLLECTION,
                "field": "content",
                "type": "text",
                "schema": {
                    "name": "content",
                    "table": TEMPLATE_COLLECTION,
                    "schema": "public",
                    "data_type": "text",
                    "is_nullable": true,
                    "generation_expression": null,
                    "default_value": null,
                    "is_generated": false,
                    "max_length": null,
                    "comment": null,
                    "numeric_precision": null,
                    "numeric_scale": null,
                    "is_unique": false,
                    "is_primary_key": false,
                    "has_auto_increment": false,
                    "foreign_key_schema": null,
                    "foreign_key_table": null,
                    "foreign_key_column": null
                },
                "meta": {

                    "collection": TEMPLATE_COLLECTION,
                    "field": "content",
                    "special": null,
                    "interface": "input-rich-text-html",
                    "options": null,
                    "display": null,
                    "display_options": null,
                    "readonly": false,
                    "hidden": false,
                    "sort": 6,
                    "width": "full",
                    "translations": null,
                    "note": null,
                    "conditions": null,
                    "required": false,
                    "group": "ForEmail",
                    "validation": null,
                    "validation_message": null
                }
            },
            {
                "collection": TEMPLATE_COLLECTION,
                "field": "cc_admin",
                "type": "boolean",
                "schema": {
                    "name": "cc_admin",
                    "table": TEMPLATE_COLLECTION,
                    "schema": "public",
                    "data_type": "boolean",
                    "is_nullable": true,
                    "generation_expression": null,
                    "default_value": false,
                    "is_generated": false,
                    "max_length": null,
                    "comment": null,
                    "numeric_precision": null,
                    "numeric_scale": null,
                    "is_unique": false,
                    "is_primary_key": false,
                    "has_auto_increment": false,
                    "foreign_key_schema": null,
                    "foreign_key_table": null,
                    "foreign_key_column": null
                },
                "meta": {

                    "collection": TEMPLATE_COLLECTION,
                    "field": "cc_admin",
                    "special": [
                        "cast-boolean"
                    ],
                    "interface": "boolean",
                    "options": null,
                    "display": null,
                    "display_options": null,
                    "readonly": false,
                    "hidden": false,
                    "sort": 2,
                    "width": "half",
                    "translations": null,
                    "note": null,
                    "conditions": null,
                    "required": false,
                    "group": "ForEmail",
                    "validation": null,
                    "validation_message": null
                }
            },
            {
                "collection": TEMPLATE_COLLECTION,
                "field": "email_enable",
                "type": "boolean",
                "schema": {
                    "name": "email_enable",
                    "table": TEMPLATE_COLLECTION,
                    "schema": "public",
                    "data_type": "boolean",
                    "is_nullable": true,
                    "generation_expression": null,
                    "default_value": true,
                    "is_generated": false,
                    "max_length": null,
                    "comment": null,
                    "numeric_precision": null,
                    "numeric_scale": null,
                    "is_unique": false,
                    "is_primary_key": false,
                    "has_auto_increment": false,
                    "foreign_key_schema": null,
                    "foreign_key_table": null,
                    "foreign_key_column": null
                },
                "meta": {

                    "collection": TEMPLATE_COLLECTION,
                    "field": "email_enable",
                    "special": [
                        "cast-boolean"
                    ],
                    "interface": "boolean",
                    "options": null,
                    "display": null,
                    "display_options": null,
                    "readonly": false,
                    "hidden": false,
                    "sort": 2,
                    "width": "half",
                    "translations": null,
                    "note": null,
                    "conditions": null,
                    "required": false,
                    "group": null,
                    "validation": null,
                    "validation_message": null
                }
            },
            {
                "collection": TEMPLATE_COLLECTION,
                "field": "variables",
                "type": "json",
                "schema": {
                    "name": "variables",
                    "table": TEMPLATE_COLLECTION,
                    "schema": "public",
                    "data_type": "json",
                    "is_nullable": true,
                    "generation_expression": null,
                    "default_value": null,
                    "is_generated": false,
                    "max_length": null,
                    "comment": null,
                    "numeric_precision": null,
                    "numeric_scale": null,
                    "is_unique": false,
                    "is_primary_key": false,
                    "has_auto_increment": false,
                    "foreign_key_schema": null,
                    "foreign_key_table": null,
                    "foreign_key_column": null
                },
                "meta": {

                    "collection": TEMPLATE_COLLECTION,
                    "field": "variables",
                    "special": [
                        "cast-json"
                    ],
                    "interface": "input-code",
                    "options": null,
                    "display": "raw",
                    "display_options": null,
                    "readonly": false,
                    "hidden": false,
                    "sort": 5,
                    "width": "full",
                    "translations": null,
                    "note": null,
                    "conditions": null,
                    "required": false,
                    "group": null,
                    "validation": null,
                    "validation_message": null
                }
            },
            {
                "collection": TEMPLATE_COLLECTION,
                "field": "description",
                "type": "text",
                "schema": {
                    "name": "description",
                    "table": TEMPLATE_COLLECTION,
                    "schema": "public",
                    "data_type": "text",
                    "is_nullable": true,
                    "generation_expression": null,
                    "default_value": null,
                    "is_generated": false,
                    "max_length": null,
                    "comment": null,
                    "numeric_precision": null,
                    "numeric_scale": null,
                    "is_unique": false,
                    "is_primary_key": false,
                    "has_auto_increment": false,
                    "foreign_key_schema": null,
                    "foreign_key_table": null,
                    "foreign_key_column": null
                },
                "meta": {

                    "collection": TEMPLATE_COLLECTION,
                    "field": "description",
                    "special": null,
                    "interface": "input-rich-text-html",
                    "options": null,
                    "display": null,
                    "display_options": null,
                    "readonly": false,
                    "hidden": false,
                    "sort": 4,
                    "width": "full",
                    "translations": null,
                    "note": null,
                    "conditions": null,
                    "required": false,
                    "group": null,
                    "validation": null,
                    "validation_message": null
                }
            },
            {
                "collection": TEMPLATE_COLLECTION,
                "field": "channels",
                "type": "json",
                "schema": {
                    "name": "channels",
                    "table": TEMPLATE_COLLECTION,
                    "schema": "public",
                    "data_type": "json",
                    "is_nullable": true,
                    "generation_expression": null,
                    "default_value": null,
                    "is_generated": false,
                    "max_length": null,
                    "comment": null,
                    "numeric_precision": null,
                    "numeric_scale": null,
                    "is_unique": false,
                    "is_primary_key": false,
                    "has_auto_increment": false,
                    "foreign_key_schema": null,
                    "foreign_key_table": null,
                    "foreign_key_column": null
                },
                "meta": {

                    "collection": TEMPLATE_COLLECTION,
                    "field": "channels",
                    "special": [
                        "cast-json"
                    ],
                    "interface": "list",
                    "options": {
                        "fields": [
                            {
                                "field": "path",
                                "name": "path",
                                "type": "string",
                                "meta": {
                                    "field": "path",
                                    "width": "full",
                                    "type": "string",
                                    "interface": null
                                }
                            }
                        ]
                    },
                    "display": null,
                    "display_options": null,
                    "readonly": false,
                    "hidden": false,
                    "sort": 1,
                    "width": "full",
                    "translations": null,
                    "note": null,
                    "conditions": null,
                    "required": false,
                    "group": "ForMatterMost",
                    "validation": null,
                    "validation_message": null
                }
            },
            {
                "collection": TEMPLATE_COLLECTION,
                "field": "mattermost_enable",
                "type": "boolean",
                "schema": {
                    "name": "mattermost_enable",
                    "table": TEMPLATE_COLLECTION,
                    "schema": "public",
                    "data_type": "boolean",
                    "is_nullable": true,
                    "generation_expression": null,
                    "default_value": false,
                    "is_generated": false,
                    "max_length": null,
                    "comment": null,
                    "numeric_precision": null,
                    "numeric_scale": null,
                    "is_unique": false,
                    "is_primary_key": false,
                    "has_auto_increment": false,
                    "foreign_key_schema": null,
                    "foreign_key_table": null,
                    "foreign_key_column": null
                },
                "meta": {

                    "collection": TEMPLATE_COLLECTION,
                    "field": "mattermost_enable",
                    "special": [
                        "cast-boolean"
                    ],
                    "interface": "boolean",
                    "options": null,
                    "display": null,
                    "display_options": null,
                    "readonly": false,
                    "hidden": false,
                    "sort": 3,
                    "width": "half",
                    "translations": null,
                    "note": null,
                    "conditions": null,
                    "required": false,
                    "group": null,
                    "validation": null,
                    "validation_message": null
                }
            },
            {
                "collection": TEMPLATE_COLLECTION,
                "field": "mattermost_content",
                "type": "text",
                "schema": {
                    "name": "mattermost_content",
                    "table": TEMPLATE_COLLECTION,
                    "schema": "public",
                    "data_type": "text",
                    "is_nullable": true,
                    "generation_expression": null,
                    "default_value": null,
                    "is_generated": false,
                    "max_length": null,
                    "comment": null,
                    "numeric_precision": null,
                    "numeric_scale": null,
                    "is_unique": false,
                    "is_primary_key": false,
                    "has_auto_increment": false,
                    "foreign_key_schema": null,
                    "foreign_key_table": null,
                    "foreign_key_column": null
                },
                "meta": {

                    "collection": TEMPLATE_COLLECTION,
                    "field": "mattermost_content",
                    "special": null,
                    "interface": "input-rich-text-md",
                    "options": null,
                    "display": null,
                    "display_options": null,
                    "readonly": false,
                    "hidden": false,
                    "sort": 2,
                    "width": "full",
                    "translations": null,
                    "note": null,
                    "conditions": null,
                    "required": false,
                    "group": "ForMatterMost",
                    "validation": null,
                    "validation_message": null
                }
            },
            {
                "collection": TEMPLATE_COLLECTION,
                "field": "cc_custom",
                "type": "json",
                "schema": {
                    "name": "cc_custom",
                    "table": TEMPLATE_COLLECTION,
                    "schema": "public",
                    "data_type": "json",
                    "is_nullable": true,
                    "generation_expression": null,
                    "default_value": null,
                    "is_generated": false,
                    "max_length": null,
                    "comment": null,
                    "numeric_precision": null,
                    "numeric_scale": null,
                    "is_unique": false,
                    "is_primary_key": false,
                    "has_auto_increment": false,
                    "foreign_key_schema": null,
                    "foreign_key_table": null,
                    "foreign_key_column": null
                },
                "meta": {

                    "collection": TEMPLATE_COLLECTION,
                    "field": "cc_custom",
                    "special": [
                        "cast-json"
                    ],
                    "interface": "tags",
                    "options": null,
                    "display": null,
                    "display_options": null,
                    "readonly": false,
                    "hidden": false,
                    "sort": 3,
                    "width": "half",
                    "translations": null,
                    "note": null,
                    "conditions": null,
                    "required": false,
                    "group": "ForEmail",
                    "validation": null,
                    "validation_message": null
                }
            },
            {
                "collection": TEMPLATE_COLLECTION,
                "field": "bcc_custom",
                "type": "json",
                "schema": {
                    "name": "bcc_custom",
                    "table": TEMPLATE_COLLECTION,
                    "schema": "public",
                    "data_type": "json",
                    "is_nullable": true,
                    "generation_expression": null,
                    "default_value": null,
                    "is_generated": false,
                    "max_length": null,
                    "comment": null,
                    "numeric_precision": null,
                    "numeric_scale": null,
                    "is_unique": false,
                    "is_primary_key": false,
                    "has_auto_increment": false,
                    "foreign_key_schema": null,
                    "foreign_key_table": null,
                    "foreign_key_column": null
                },
                "meta": {

                    "collection": TEMPLATE_COLLECTION,
                    "field": "bcc_custom",
                    "special": [
                        "cast-json"
                    ],
                    "interface": "tags",
                    "options": null,
                    "display": null,
                    "display_options": null,
                    "readonly": false,
                    "hidden": false,
                    "sort": 4,
                    "width": "half",
                    "translations": null,
                    "note": null,
                    "conditions": null,
                    "required": false,
                    "group": "ForEmail",
                    "validation": null,
                    "validation_message": null
                }
            },
            {
                "collection": TEMPLATE_COLLECTION,
                "field": "to_custom",
                "type": "json",
                "schema": {
                    "name": "to_custom",
                    "table": TEMPLATE_COLLECTION,
                    "schema": "public",
                    "data_type": "json",
                    "is_nullable": true,
                    "generation_expression": null,
                    "default_value": null,
                    "is_generated": false,
                    "max_length": null,
                    "comment": null,
                    "numeric_precision": null,
                    "numeric_scale": null,
                    "is_unique": false,
                    "is_primary_key": false,
                    "has_auto_increment": false,
                    "foreign_key_schema": null,
                    "foreign_key_table": null,
                    "foreign_key_column": null
                },
                "meta": {

                    "collection": TEMPLATE_COLLECTION,
                    "field": "to_custom",
                    "special": [
                        "cast-json"
                    ],
                    "interface": "tags",
                    "options": null,
                    "display": null,
                    "display_options": null,
                    "readonly": false,
                    "hidden": false,
                    "sort": 1,
                    "width": "half",
                    "translations": null,
                    "note": null,
                    "conditions": null,
                    "required": false,
                    "group": "ForEmail",
                    "validation": null,
                    "validation_message": null
                }
            },
            {
                "collection": TEMPLATE_COLLECTION,
                "field": LOGS_COLLECTION,
                "type": "alias",
                "schema": null,
                "meta": {

                    "collection": TEMPLATE_COLLECTION,
                    "field": LOGS_COLLECTION,
                    "special": [
                        "o2m"
                    ],
                    "interface": "list-o2m",
                    "options": {
                        "layout": "table",
                        "fields": [
                            "status",
                            "email_enable",
                            "mattermost_enable",
                            "template",
                            "subject",
                            "mattermost_content",
                            "meta"
                        ]
                    },
                    "display": "related-values",
                    "display_options": {
                        "template": "{{template}}"
                    },
                    "readonly": false,
                    "hidden": false,
                    "sort": 8,
                    "width": "full",
                    "translations": null,
                    "note": null,
                    "conditions": null,
                    "required": false,
                    "group": null,
                    "validation": null,
                    "validation_message": null
                }
            },
            {
                "collection": TEMPLATE_COLLECTION,
                "field": "ForEmail",
                "type": "alias",
                "schema": null,
                "meta": {

                    "collection": TEMPLATE_COLLECTION,
                    "field": "ForEmail",
                    "special": [
                        "alias",
                        "no-data",
                        "group"
                    ],
                    "interface": "group-detail",
                    "options": {
                        "headerIcon": "alternate_email",
                        "headerColor": "#8A0000"
                    },
                    "display": null,
                    "display_options": null,
                    "readonly": false,
                    "hidden": false,
                    "sort": 6,
                    "width": "full",
                    "translations": null,
                    "note": null,
                    "conditions": [
                        {
                            "name": "Display",
                            "rule": {
                                "_and": [
                                    {
                                        "email_enable": {
                                            "_eq": false
                                        }
                                    }
                                ]
                            },
                            "readonly": true,
                            "hidden": true,
                            "options": {
                                "start": "open"
                            }
                        }
                    ],
                    "required": false,
                    "group": null,
                    "validation": null,
                    "validation_message": null
                }
            },
            {
                "collection": TEMPLATE_COLLECTION,
                "field": "ForMatterMost",
                "type": "alias",
                "schema": null,
                "meta": {

                    "collection": TEMPLATE_COLLECTION,
                    "field": "ForMatterMost",
                    "special": [
                        "alias",
                        "no-data",
                        "group"
                    ],
                    "interface": "group-detail",
                    "options": {
                        "headerIcon": "wifi_channel",
                        "headerColor": "#6644FF"
                    },
                    "display": null,
                    "display_options": null,
                    "readonly": false,
                    "hidden": false,
                    "sort": 7,
                    "width": "full",
                    "translations": null,
                    "note": null,
                    "conditions": [
                        {
                            "name": "Display",
                            "rule": {
                                "_and": [
                                    {
                                        "mattermost_enable": {
                                            "_eq": false
                                        }
                                    }
                                ]
                            },
                            "readonly": true,
                            "hidden": true,
                            "options": {
                                "start": "open"
                            }
                        }
                    ],
                    "required": false,
                    "group": null,
                    "validation": null,
                    "validation_message": null
                }
            }
        ]
        ,
        "schema": {
            "schema": "public",
            "name": TEMPLATE_COLLECTION,
            "comment": null
        }
    },
    {
        "collection": LOGS_COLLECTION,
        "meta": {
            "collection": LOGS_COLLECTION,
            "icon": null,
            "note": null,
            "display_template": null,
            "hidden": false,
            "singleton": false,
            "translations": null,
            "archive_field": null,
            "archive_app_filter": true,
            "archive_value": null,
            "unarchive_value": null,
            "sort_field": null,
            "accountability": "all",
            "color": null,
            "item_duplication_fields": null,
            "sort": 1,
            "group": TEMPLATE_COLLECTION,
            "collapse": "open",
            "preview_url": null,
            "versioning": false
        },
        "fields": [
            {
                "collection": LOGS_COLLECTION,
                "field": "id",
                "type": "integer",
                "schema": {
                    "name": "id",
                    "table": LOGS_COLLECTION,
                    "schema": "public",
                    "data_type": "integer",
                    "is_nullable": false,
                    "generation_expression": null,
                    "default_value": `nextval('${LOGS_COLLECTION}_id_seq'::regclass)`,
                    "is_generated": false,
                    "max_length": null,
                    "comment": null,
                    "numeric_precision": 32,
                    "numeric_scale": 0,
                    "is_unique": true,
                    "is_primary_key": true,
                    "has_auto_increment": true,
                    "foreign_key_schema": null,
                    "foreign_key_table": null,
                    "foreign_key_column": null
                },
                "meta": {

                    "collection": LOGS_COLLECTION,
                    "field": "id",
                    "special": null,
                    "interface": "input",
                    "options": null,
                    "display": null,
                    "display_options": null,
                    "readonly": true,
                    "hidden": true,
                    "sort": 1,
                    "width": "full",
                    "translations": null,
                    "note": null,
                    "conditions": null,
                    "required": false,
                    "group": null,
                    "validation": null,
                    "validation_message": null
                }
            },
            {
                "collection": LOGS_COLLECTION,
                "field": "status",
                "type": "string",
                "schema": {
                    "name": "status",
                    "table": LOGS_COLLECTION,
                    "schema": "public",
                    "data_type": "character varying",
                    "is_nullable": true,
                    "generation_expression": null,
                    "default_value": "pending",
                    "is_generated": false,
                    "max_length": 255,
                    "comment": null,
                    "numeric_precision": null,
                    "numeric_scale": null,
                    "is_unique": false,
                    "is_primary_key": false,
                    "has_auto_increment": false,
                    "foreign_key_schema": null,
                    "foreign_key_table": null,
                    "foreign_key_column": null
                },
                "meta": {

                    "collection": LOGS_COLLECTION,
                    "field": "status",
                    "special": null,
                    "interface": "select-dropdown",
                    "options": {
                        "choices": [
                            {
                                "text": "Pending",
                                "value": "pending"
                            },
                            {
                                "text": "Sent",
                                "value": "sent"
                            },
                            {
                                "text": "Error",
                                "value": "error"
                            },
                            {
                                "text": "Cancel",
                                "value": "cancel"
                            }
                        ]
                    },
                    "display": "labels",
                    "display_options": {
                        "choices": [
                            {
                                "text": "Pending",
                                "value": "pending",
                                "icon": "schedule_send",
                                "color": "#6644FF",
                                "foreground": "#6644FF",
                                "background": "#DAD1FF"
                            },
                            {
                                "text": "Sent",
                                "value": "sent",
                                "icon": "send",
                                "color": "#005742",
                                "foreground": "#004D3B",
                                "background": "#A2B5CD"
                            },
                            {
                                "text": "Error",
                                "value": "error",
                                "icon": "cancel_schedule_send",
                                "color": "#18222F",
                                "foreground": "#18222F",
                                "background": "#707070"
                            },
                            {
                                "text": "Cancel",
                                "value": "cancel",
                                "icon": "send_time_extension",
                                "color": "#A2B5CD",
                                "foreground": "#A2B5CD",
                                "background": "#18222F"
                            }
                        ]
                    },
                    "readonly": false,
                    "hidden": false,
                    "sort": 1,
                    "width": "half",
                    "translations": null,
                    "note": null,
                    "conditions": null,
                    "required": false,
                    "group": "ForEmail",
                    "validation": null,
                    "validation_message": null
                }
            },
            {
                "collection": LOGS_COLLECTION,
                "field": "date_created",
                "type": "timestamp",
                "schema": {
                    "name": "date_created",
                    "table": LOGS_COLLECTION,
                    "schema": "public",
                    "data_type": "timestamp with time zone",
                    "is_nullable": true,
                    "generation_expression": null,
                    "default_value": null,
                    "is_generated": false,
                    "max_length": null,
                    "comment": null,
                    "numeric_precision": null,
                    "numeric_scale": null,
                    "is_unique": false,
                    "is_primary_key": false,
                    "has_auto_increment": false,
                    "foreign_key_schema": null,
                    "foreign_key_table": null,
                    "foreign_key_column": null
                },
                "meta": {

                    "collection": LOGS_COLLECTION,
                    "field": "date_created",
                    "special": [
                        "date-created"
                    ],
                    "interface": "datetime",
                    "options": null,
                    "display": null,
                    "display_options": null,
                    "readonly": true,
                    "hidden": false,
                    "sort": 2,
                    "width": "half",
                    "translations": null,
                    "note": null,
                    "conditions": null,
                    "required": false,
                    "group": null,
                    "validation": null,
                    "validation_message": null
                }
            },
            {
                "collection": LOGS_COLLECTION,
                "field": "subject",
                "type": "string",
                "schema": {
                    "name": "subject",
                    "table": LOGS_COLLECTION,
                    "schema": "public",
                    "data_type": "character varying",
                    "is_nullable": true,
                    "generation_expression": null,
                    "default_value": null,
                    "is_generated": false,
                    "max_length": 500,
                    "comment": null,
                    "numeric_precision": null,
                    "numeric_scale": null,
                    "is_unique": false,
                    "is_primary_key": false,
                    "has_auto_increment": false,
                    "foreign_key_schema": null,
                    "foreign_key_table": null,
                    "foreign_key_column": null
                },
                "meta": {

                    "collection": LOGS_COLLECTION,
                    "field": "subject",
                    "special": null,
                    "interface": "input",
                    "options": null,
                    "display": null,
                    "display_options": null,
                    "readonly": false,
                    "hidden": false,
                    "sort": 5,
                    "width": "full",
                    "translations": null,
                    "note": null,
                    "conditions": null,
                    "required": false,
                    "group": "ForEmail",
                    "validation": null,
                    "validation_message": null
                }
            },
            {
                "collection": LOGS_COLLECTION,
                "field": "content",
                "type": "text",
                "schema": {
                    "name": "content",
                    "table": LOGS_COLLECTION,
                    "schema": "public",
                    "data_type": "text",
                    "is_nullable": true,
                    "generation_expression": null,
                    "default_value": null,
                    "is_generated": false,
                    "max_length": null,
                    "comment": null,
                    "numeric_precision": null,
                    "numeric_scale": null,
                    "is_unique": false,
                    "is_primary_key": false,
                    "has_auto_increment": false,
                    "foreign_key_schema": null,
                    "foreign_key_table": null,
                    "foreign_key_column": null
                },
                "meta": {

                    "collection": LOGS_COLLECTION,
                    "field": "content",
                    "special": null,
                    "interface": "input-rich-text-html",
                    "options": null,
                    "display": null,
                    "display_options": null,
                    "readonly": false,
                    "hidden": false,
                    "sort": 6,
                    "width": "full",
                    "translations": null,
                    "note": null,
                    "conditions": null,
                    "required": false,
                    "group": "ForEmail",
                    "validation": null,
                    "validation_message": null
                }
            },
            {
                "collection": LOGS_COLLECTION,
                "field": "cc",
                "type": "json",
                "schema": {
                    "name": "cc",
                    "table": LOGS_COLLECTION,
                    "schema": "public",
                    "data_type": "json",
                    "is_nullable": true,
                    "generation_expression": null,
                    "default_value": null,
                    "is_generated": false,
                    "max_length": null,
                    "comment": null,
                    "numeric_precision": null,
                    "numeric_scale": null,
                    "is_unique": false,
                    "is_primary_key": false,
                    "has_auto_increment": false,
                    "foreign_key_schema": null,
                    "foreign_key_table": null,
                    "foreign_key_column": null
                },
                "meta": {

                    "collection": LOGS_COLLECTION,
                    "field": "cc",
                    "special": [
                        "cast-json"
                    ],
                    "interface": "tags",
                    "options": null,
                    "display": null,
                    "display_options": null,
                    "readonly": false,
                    "hidden": false,
                    "sort": 3,
                    "width": "half",
                    "translations": null,
                    "note": null,
                    "conditions": null,
                    "required": false,
                    "group": "ForEmail",
                    "validation": null,
                    "validation_message": null
                }
            },
            {
                "collection": LOGS_COLLECTION,
                "field": "bcc",
                "type": "json",
                "schema": {
                    "name": "bcc",
                    "table": LOGS_COLLECTION,
                    "schema": "public",
                    "data_type": "json",
                    "is_nullable": true,
                    "generation_expression": null,
                    "default_value": null,
                    "is_generated": false,
                    "max_length": null,
                    "comment": null,
                    "numeric_precision": null,
                    "numeric_scale": null,
                    "is_unique": false,
                    "is_primary_key": false,
                    "has_auto_increment": false,
                    "foreign_key_schema": null,
                    "foreign_key_table": null,
                    "foreign_key_column": null
                },
                "meta": {

                    "collection": LOGS_COLLECTION,
                    "field": "bcc",
                    "special": [
                        "cast-json"
                    ],
                    "interface": "tags",
                    "options": null,
                    "display": null,
                    "display_options": null,
                    "readonly": false,
                    "hidden": false,
                    "sort": 4,
                    "width": "half",
                    "translations": null,
                    "note": null,
                    "conditions": null,
                    "required": false,
                    "group": "ForEmail",
                    "validation": null,
                    "validation_message": null
                }
            },
            {
                "collection": LOGS_COLLECTION,
                "field": "receive_emails",
                "type": "json",
                "schema": {
                    "name": "receive_emails",
                    "table": LOGS_COLLECTION,
                    "schema": "public",
                    "data_type": "json",
                    "is_nullable": true,
                    "generation_expression": null,
                    "default_value": null,
                    "is_generated": false,
                    "max_length": null,
                    "comment": null,
                    "numeric_precision": null,
                    "numeric_scale": null,
                    "is_unique": false,
                    "is_primary_key": false,
                    "has_auto_increment": false,
                    "foreign_key_schema": null,
                    "foreign_key_table": null,
                    "foreign_key_column": null
                },
                "meta": {

                    "collection": LOGS_COLLECTION,
                    "field": "receive_emails",
                    "special": [
                        "cast-json"
                    ],
                    "interface": "tags",
                    "options": null,
                    "display": null,
                    "display_options": null,
                    "readonly": false,
                    "hidden": false,
                    "sort": 2,
                    "width": "full",
                    "translations": null,
                    "note": null,
                    "conditions": null,
                    "required": false,
                    "group": "ForEmail",
                    "validation": null,
                    "validation_message": null
                }
            },
            {
                "collection": LOGS_COLLECTION,
                "field": "variables",
                "type": "json",
                "schema": {
                    "name": "variables",
                    "table": LOGS_COLLECTION,
                    "schema": "public",
                    "data_type": "json",
                    "is_nullable": true,
                    "generation_expression": null,
                    "default_value": null,
                    "is_generated": false,
                    "max_length": null,
                    "comment": null,
                    "numeric_precision": null,
                    "numeric_scale": null,
                    "is_unique": false,
                    "is_primary_key": false,
                    "has_auto_increment": false,
                    "foreign_key_schema": null,
                    "foreign_key_table": null,
                    "foreign_key_column": null
                },
                "meta": {

                    "collection": LOGS_COLLECTION,
                    "field": "variables",
                    "special": [
                        "cast-json"
                    ],
                    "interface": "input-code",
                    "options": {
                        "language": "JSON"
                    },
                    "display": null,
                    "display_options": null,
                    "readonly": false,
                    "hidden": false,
                    "sort": 7,
                    "width": "full",
                    "translations": null,
                    "note": null,
                    "conditions": null,
                    "required": false,
                    "group": null,
                    "validation": null,
                    "validation_message": null
                }
            },
            {
                "collection": LOGS_COLLECTION,
                "field": "schedule_sent",
                "type": "timestamp",
                "schema": {
                    "name": "schedule_sent",
                    "table": LOGS_COLLECTION,
                    "schema": "public",
                    "data_type": "timestamp with time zone",
                    "is_nullable": true,
                    "generation_expression": null,
                    "default_value": null,
                    "is_generated": false,
                    "max_length": null,
                    "comment": null,
                    "numeric_precision": null,
                    "numeric_scale": null,
                    "is_unique": false,
                    "is_primary_key": false,
                    "has_auto_increment": false,
                    "foreign_key_schema": null,
                    "foreign_key_table": null,
                    "foreign_key_column": null
                },
                "meta": {

                    "collection": LOGS_COLLECTION,
                    "field": "schedule_sent",
                    "special": null,
                    "interface": "datetime",
                    "options": null,
                    "display": null,
                    "display_options": null,
                    "readonly": false,
                    "hidden": false,
                    "sort": 3,
                    "width": "half",
                    "translations": null,
                    "note": null,
                    "conditions": null,
                    "required": false,
                    "group": null,
                    "validation": null,
                    "validation_message": null
                }
            },
            {
                "collection": LOGS_COLLECTION,
                "field": "template",
                "type": "text",
                "schema": {
                    "name": "template",
                    "table": LOGS_COLLECTION,
                    "schema": "public",
                    "data_type": "text",
                    "is_nullable": true,
                    "generation_expression": null,
                    "default_value": null,
                    "is_generated": false,
                    "max_length": null,
                    "comment": null,
                    "numeric_precision": null,
                    "numeric_scale": null,
                    "is_unique": false,
                    "is_primary_key": false,
                    "has_auto_increment": false,
                    "foreign_key_schema": "public",
                    "foreign_key_table": "notify_templates",
                    "foreign_key_column": "id"
                },
                "meta": {

                    "collection": LOGS_COLLECTION,
                    "field": "template",
                    "special": [
                        "m2o"
                    ],
                    "interface": "select-dropdown-m2o",
                    "options": {
                        "template": "{{id}}"
                    },
                    "display": null,
                    "display_options": null,
                    "readonly": false,
                    "hidden": false,
                    "sort": 6,
                    "width": "half",
                    "translations": null,
                    "note": null,
                    "conditions": null,
                    "required": false,
                    "group": null,
                    "validation": null,
                    "validation_message": null
                }
            },
            {
                "collection": LOGS_COLLECTION,
                "field": "meta",
                "type": "json",
                "schema": {
                    "name": "meta",
                    "table": LOGS_COLLECTION,
                    "schema": "public",
                    "data_type": "json",
                    "is_nullable": true,
                    "generation_expression": null,
                    "default_value": null,
                    "is_generated": false,
                    "max_length": null,
                    "comment": null,
                    "numeric_precision": null,
                    "numeric_scale": null,
                    "is_unique": false,
                    "is_primary_key": false,
                    "has_auto_increment": false,
                    "foreign_key_schema": null,
                    "foreign_key_table": null,
                    "foreign_key_column": null
                },
                "meta": {

                    "collection": LOGS_COLLECTION,
                    "field": "meta",
                    "special": [
                        "cast-json"
                    ],
                    "interface": "list",
                    "options": {
                        "fields": [
                            {
                                "field": "type",
                                "name": "type",
                                "type": "string",
                                "meta": {
                                    "field": "type",
                                    "width": "half",
                                    "type": "string",
                                    "interface": "select-dropdown",
                                    "options": {
                                        "choices": [
                                            {
                                                "text": "Email",
                                                "value": "email",
                                                "icon": "attach_email"
                                            },
                                            {
                                                "text": "Mattermost",
                                                "value": "mattermost",
                                                "icon": "wifi_channel"
                                            }
                                        ]
                                    },
                                    "display": "labels",
                                    "display_options": {
                                        "choices": [
                                            {
                                                "text": "Email",
                                                "value": "email",
                                                "icon": "attach_email"
                                            },
                                            {
                                                "text": "Mattermost",
                                                "value": "mattermost",
                                                "icon": "wifi_channel"
                                            }
                                        ]
                                    }
                                }
                            },
                            {
                                "field": "key",
                                "name": "key",
                                "type": "string",
                                "meta": {
                                    "field": "key",
                                    "type": "string",
                                    "interface": "select-dropdown",
                                    "options": {
                                        "choices": [
                                            {
                                                "text": "Error",
                                                "value": "error"
                                            },
                                            {
                                                "text": "Success",
                                                "value": "success"
                                            }
                                        ]
                                    },
                                    "display": "labels",
                                    "display_options": {
                                        "choices": [
                                            {
                                                "text": "Error",
                                                "value": "error"
                                            },
                                            {
                                                "text": "Success",
                                                "value": "success"
                                            }
                                        ]
                                    }
                                }
                            },
                            {
                                "field": "value",
                                "name": "value",
                                "type": "text",
                                "meta": {
                                    "field": "value",
                                    "type": "text",
                                    "interface": "input"
                                }
                            }
                        ],
                        "template": "{{key}} : {{value}}"
                    },
                    "display": null,
                    "display_options": null,
                    "readonly": false,
                    "hidden": false,
                    "sort": 10,
                    "width": "full",
                    "translations": null,
                    "note": null,
                    "conditions": null,
                    "required": false,
                    "group": null,
                    "validation": null,
                    "validation_message": null
                }
            },
            {
                "collection": LOGS_COLLECTION,
                "field": "mattermost_content",
                "type": "text",
                "schema": {
                    "name": "mattermost_content",
                    "table": LOGS_COLLECTION,
                    "schema": "public",
                    "data_type": "text",
                    "is_nullable": true,
                    "generation_expression": null,
                    "default_value": null,
                    "is_generated": false,
                    "max_length": null,
                    "comment": null,
                    "numeric_precision": null,
                    "numeric_scale": null,
                    "is_unique": false,
                    "is_primary_key": false,
                    "has_auto_increment": false,
                    "foreign_key_schema": null,
                    "foreign_key_table": null,
                    "foreign_key_column": null
                },
                "meta": {

                    "collection": LOGS_COLLECTION,
                    "field": "mattermost_content",
                    "special": null,
                    "interface": "input-rich-text-md",
                    "options": null,
                    "display": null,
                    "display_options": null,
                    "readonly": false,
                    "hidden": false,
                    "sort": 3,
                    "width": "full",
                    "translations": null,
                    "note": null,
                    "conditions": null,
                    "required": false,
                    "group": "ForMatterMost",
                    "validation": null,
                    "validation_message": null
                }
            },
            {
                "collection": LOGS_COLLECTION,
                "field": "mattermost_status",
                "type": "string",
                "schema": {
                    "name": "mattermost_status",
                    "table": LOGS_COLLECTION,
                    "schema": "public",
                    "data_type": "character varying",
                    "is_nullable": true,
                    "generation_expression": null,
                    "default_value": "pending",
                    "is_generated": false,
                    "max_length": 255,
                    "comment": null,
                    "numeric_precision": null,
                    "numeric_scale": null,
                    "is_unique": false,
                    "is_primary_key": false,
                    "has_auto_increment": false,
                    "foreign_key_schema": null,
                    "foreign_key_table": null,
                    "foreign_key_column": null
                },
                "meta": {

                    "collection": LOGS_COLLECTION,
                    "field": "mattermost_status",
                    "special": null,
                    "interface": "select-dropdown",
                    "options": {
                        "choices": [
                            {
                                "text": "Pending",
                                "value": "pending"
                            },
                            {
                                "text": "Sent",
                                "value": "sent"
                            },
                            {
                                "text": "Error",
                                "value": "error"
                            },
                            {
                                "text": "Cancel",
                                "value": "cancel"
                            }
                        ]
                    },
                    "display": "labels",
                    "display_options": {
                        "choices": [
                            {
                                "text": "Pending",
                                "value": "pending",
                                "icon": "schedule_send",
                                "color": "#6644FF",
                                "foreground": "#6644FF",
                                "background": "#DAD1FF"
                            },
                            {
                                "text": "Sent",
                                "value": "sent",
                                "icon": "send",
                                "color": "#005742",
                                "foreground": "#004D3B",
                                "background": "#A2B5CD"
                            },
                            {
                                "text": "Error",
                                "value": "error",
                                "icon": "cancel_schedule_send",
                                "color": "#18222F",
                                "foreground": "#18222F",
                                "background": "#707070"
                            },
                            {
                                "text": "Cancel",
                                "value": "cancel",
                                "icon": "send_time_extension",
                                "color": "#A2B5CD",
                                "foreground": "#A2B5CD",
                                "background": "#18222F"
                            }
                        ]
                    },
                    "readonly": false,
                    "hidden": false,
                    "sort": 1,
                    "width": "half",
                    "translations": null,
                    "note": null,
                    "conditions": null,
                    "required": false,
                    "group": "ForMatterMost",
                    "validation": null,
                    "validation_message": null
                }
            },
            {
                "collection": LOGS_COLLECTION,
                "field": "channels",
                "type": "json",
                "schema": {
                    "name": "channels",
                    "table": LOGS_COLLECTION,
                    "schema": "public",
                    "data_type": "json",
                    "is_nullable": true,
                    "generation_expression": null,
                    "default_value": null,
                    "is_generated": false,
                    "max_length": null,
                    "comment": null,
                    "numeric_precision": null,
                    "numeric_scale": null,
                    "is_unique": false,
                    "is_primary_key": false,
                    "has_auto_increment": false,
                    "foreign_key_schema": null,
                    "foreign_key_table": null,
                    "foreign_key_column": null
                },
                "meta": {

                    "collection": LOGS_COLLECTION,
                    "field": "channels",
                    "special": [
                        "cast-json"
                    ],
                    "interface": "list",
                    "options": {
                        "fields": [
                            {
                                "field": "path",
                                "name": "path",
                                "type": "string",
                                "meta": {
                                    "field": "path",
                                    "width": "full",
                                    "type": "string",
                                    "interface": null
                                }
                            }
                        ]
                    },
                    "display": null,
                    "display_options": null,
                    "readonly": false,
                    "hidden": false,
                    "sort": 2,
                    "width": "full",
                    "translations": null,
                    "note": null,
                    "conditions": null,
                    "required": false,
                    "group": "ForMatterMost",
                    "validation": null,
                    "validation_message": null
                }
            },
            {
                "collection": LOGS_COLLECTION,
                "field": "email_enable",
                "type": "boolean",
                "schema": {
                    "name": "email_enable",
                    "table": LOGS_COLLECTION,
                    "schema": "public",
                    "data_type": "boolean",
                    "is_nullable": true,
                    "generation_expression": null,
                    "default_value": true,
                    "is_generated": false,
                    "max_length": null,
                    "comment": null,
                    "numeric_precision": null,
                    "numeric_scale": null,
                    "is_unique": false,
                    "is_primary_key": false,
                    "has_auto_increment": false,
                    "foreign_key_schema": null,
                    "foreign_key_table": null,
                    "foreign_key_column": null
                },
                "meta": {

                    "collection": LOGS_COLLECTION,
                    "field": "email_enable",
                    "special": [
                        "cast-boolean"
                    ],
                    "interface": "boolean",
                    "options": null,
                    "display": null,
                    "display_options": null,
                    "readonly": false,
                    "hidden": false,
                    "sort": 4,
                    "width": "half",
                    "translations": null,
                    "note": null,
                    "conditions": null,
                    "required": false,
                    "group": null,
                    "validation": null,
                    "validation_message": null
                }
            },
            {
                "collection": LOGS_COLLECTION,
                "field": "mattermost_enable",
                "type": "boolean",
                "schema": {
                    "name": "mattermost_enable",
                    "table": LOGS_COLLECTION,
                    "schema": "public",
                    "data_type": "boolean",
                    "is_nullable": true,
                    "generation_expression": null,
                    "default_value": false,
                    "is_generated": false,
                    "max_length": null,
                    "comment": null,
                    "numeric_precision": null,
                    "numeric_scale": null,
                    "is_unique": false,
                    "is_primary_key": false,
                    "has_auto_increment": false,
                    "foreign_key_schema": null,
                    "foreign_key_table": null,
                    "foreign_key_column": null
                },
                "meta": {

                    "collection": LOGS_COLLECTION,
                    "field": "mattermost_enable",
                    "special": [
                        "cast-boolean"
                    ],
                    "interface": "boolean",
                    "options": null,
                    "display": null,
                    "display_options": null,
                    "readonly": false,
                    "hidden": false,
                    "sort": 5,
                    "width": "half",
                    "translations": null,
                    "note": null,
                    "conditions": null,
                    "required": false,
                    "group": null,
                    "validation": null,
                    "validation_message": null
                }
            },
            {
                "collection": LOGS_COLLECTION,
                "field": "ForEmail",
                "type": "alias",
                "schema": null,
                "meta": {

                    "collection": LOGS_COLLECTION,
                    "field": "ForEmail",
                    "special": [
                        "alias",
                        "no-data",
                        "group"
                    ],
                    "interface": "group-detail",
                    "options": {
                        "headerIcon": "alternate_email",
                        "headerColor": "#A30000"
                    },
                    "display": null,
                    "display_options": null,
                    "readonly": false,
                    "hidden": false,
                    "sort": 8,
                    "width": "full",
                    "translations": null,
                    "note": null,
                    "conditions": [
                        {
                            "name": "Display",
                            "rule": {
                                "_and": [
                                    {
                                        "email_enable": {
                                            "_eq": false
                                        }
                                    }
                                ]
                            },
                            "readonly": true,
                            "hidden": true,
                            "options": {
                                "start": "open"
                            }
                        }
                    ],
                    "required": false,
                    "group": null,
                    "validation": null,
                    "validation_message": null
                }
            },
            {
                "collection": LOGS_COLLECTION,
                "field": "ForMatterMost",
                "type": "alias",
                "schema": null,
                "meta": {

                    "collection": LOGS_COLLECTION,
                    "field": "ForMatterMost",
                    "special": [
                        "alias",
                        "no-data",
                        "group"
                    ],
                    "interface": "group-detail",
                    "options": {
                        "headerIcon": "wifi_channel",
                        "headerColor": "#6644FF"
                    },
                    "display": null,
                    "display_options": null,
                    "readonly": false,
                    "hidden": false,
                    "sort": 9,
                    "width": "full",
                    "translations": null,
                    "note": null,
                    "conditions": [
                        {
                            "name": "Display",
                            "rule": {
                                "_and": [
                                    {
                                        "mattermost_enable": {
                                            "_eq": false
                                        }
                                    }
                                ]
                            },
                            "readonly": true,
                            "hidden": true,
                            "options": {
                                "start": "open"
                            }
                        }
                    ],
                    "required": false,
                    "group": null,
                    "validation": null,
                    "validation_message": null
                }
            }
        ]
        ,
        "schema": {
            "schema": "public",
            "name": LOGS_COLLECTION,
            "comment": null
        }
    },

] 
