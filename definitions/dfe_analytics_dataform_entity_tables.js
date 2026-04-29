const dfeAnalyticsDataform = require("dfe-analytics-dataform");

dfeAnalyticsDataform({
    eventSourceName: "entity_tables",
    bqProjectName: "teaching-qualifications",
    bqDatasetName: "events_production",
    bqEventsTableName: "events",
    urlRegex: "(?i)(check-a-teachers-record.education.gov.uk|access-your-teaching-qualifications.education.gov.uk)",
    hiddenPolicyTagLocation: "projects/teaching-qualifications/locations/europe-west2/taxonomies/5159319666739647034/policyTags/2606812594222933114",
    expirationDays: false,
    dataSchema: [{
            entityTableName: "search_logs",
            description: "",
            keys: [{
                    keyName: "dsi_user_id",
                    dataType: "string",
                    description: "",
                },
                {
                    keyName: "last_name",
                    dataType: "string",
                    description: "",
                    hidden: true,
                },
                {
                    keyName: "date_of_birth",
                    dataType: "string",
                    description: "",
                    hidden: true,
                },
                {
                    keyName: "result_count",
                    dataType: "string",
                    description: "",
                },
                {
                    keyName: "search_type",
                    dataType: "string",
                    description: "",
                },
            ],
        },
        {
            entityTableName: "feedbacks",
            description: "",
            keys: [{
                    keyName: "satisfaction_rating",
                    dataType: "string",
                    description: "",
                },
                {
                    keyName: "improvement_suggestion",
                    dataType: "string",
                    description: "",
                },
                {
                    keyName: "contact_permission_given",
                    dataType: "boolean",
                    description: "",
                },
                {
                    keyName: "email",
                    dataType: "string",
                    description: "",
                    hidden: true,
                },
                {
                    keyName: "service",
                    dataType: "string",
                    description: "",
                },
            ],
        },
        {
            entityTableName: "dsi_users",
            description: "",
            keys: [{
                    keyName: "uid",
                    dataType: "string",
                    description: "",
                },
                {
                    keyName: "staff",
                    dataType: "string",
                    description: "",
                },
                {
                    keyName: "email",
                    dataType: "string",
                    description: "",
                    hidden: true,
                },
                {
                    keyName: "first_name",
                    dataType: "string",
                    description: "",
                    hidden: true,
                },
                {
                    keyName: "last_name",
                    dataType: "string",
                    description: "",
                    hidden: true,
                },
                {
                    keyName: "terms_and_conditions_accepted_at",
                    dataType: "string",
                    description: "",
                },
                {
                    keyName: "terms_and_conditions_version_accepted",
                    dataType: "string",
                    description: "",
                },
            ],
        },
        {
            entityTableName: "dsi_user_sessions",
            description: "",
            keys: [{
                    keyName: "dsi_user_id",
                    dataType: "string",
                    description: "",
                },
                {
                    keyName: "role_id",
                    dataType: "string",
                    description: "",
                },
                {
                    keyName: "role_code",
                    dataType: "string",
                    description: "",
                },
                {
                    keyName: "organisation_id",
                    dataType: "string",
                    description: "",
                },
                {
                    keyName: "organisation_name",
                    dataType: "string",
                    description: "",
                },
            ],
        },
        {
            entityTableName: "users",
            description: "",
            keys: [{
                    keyName: "trn",
                    dataType: "string",
                    description: "",
                    hidden: true,
                },
                {
                    keyName: "auth_uuid",
                    dataType: "string",
                    description: "",
                },
                {
                    keyName: "auth_provider",
                    dataType: "string",
                    description: "",
                }, {
                    keyName: "date_of_birth",
                    dataType: "string",
                    description: "",
                    hidden: true,
                },
                {
                    keyName: "email",
                    dataType: "string",
                    description: "",
                    hidden: true,
                },
                {
                    keyName: "family_name",
                    dataType: "string",
                    description: "",
                    hidden: true,
                }, {
                    keyName: "given_name",
                    dataType: "string",
                    description: "",
                    hidden: true,
                },
                {
                    keyName: "name",
                    dataType: "string",
                    description: "",
                    hidden: true,
                },
                {
                    keyName: "one_login_verified_birth_date",
                    dataType: "string",
                    description: "",
                    hidden: true,
                },
                {
                    keyName: "one_login_verified_name",
                    dataType: "string",
                    description: "",
                    hidden: true,
                },
            ],
        },
        {
            entityTableName: "bulk_search_logs",
            description: "",
            keys: [{
                    keyName: "dsi_user_id",
                    dataType: "string",
                    description: "",
                },
                {
                    keyName: "query_count",
                    dataType: "integer",
                    description: "",
                },
                {
                    keyName: "result_count",
                    dataType: "integer",
                    description: "",
                }, {
                    keyName: "csv",
                    dataType: "string",
                    description: "",
                    hidden: true,
                },
            ],
        },
        {
            entityTableName: "bulk_search_responses",
            description: "",
            keys: [{
                    keyName: "body",
                    dataType: "string",
                    description: "",
                },
                {
                    keyName: "expires_at",
                    dataType: "date",
                    description: "",
                },
                {
                    keyName: "dsi_user_id",
                    dataType: "string",
                    description: "",
                }, {
                    keyName: "total",
                    dataType: "string",
                    description: "",
                    hidden: true,
                },
            ],
        },
        {
            entityTableName: "feature_flags_features",
            description: "",
            keys: [{
                    keyName: "active",
                    dataType: "string",
                    description: "",
                },
                {
                    keyName: "name",
                    dataType: "string",
                    description: "",
                }
            ],
        },
        {
            entityTableName: "active_storage_attachments",
            description: "",
            keys: [{
                    keyName: "blob_id",
                    dataType: "string",
                    description: "",
                },
                {
                    keyName: "name",
                    dataType: "string",
                    description: "",
                },
                {
                    keyName: "record_id",
                    dataType: "string",
                    description: "",
                },
                {
                    keyName: "record_type",
                    dataType: "string",
                    description: "",
                }
            ],
        },
        {
            entityTableName: "active_storage_blobs",
            description: "",
            keys: [{
                    keyName: "byte_size",
                    dataType: "string",
                    description: "",
                },
                {
                    keyName: "checksum",
                    dataType: "string",
                    description: "",
                },
                {
                    keyName: "content_type",
                    dataType: "string",
                    description: "",
                },
                {
                    keyName: "filename",
                    dataType: "string",
                    description: "",
                },
                {
                    keyName: "key",
                    dataType: "string",
                    description: "",
                },
                {
                    keyName: "metadata",
                    dataType: "string",
                    description: "",
                },
                {
                    keyName: "service_name",
                    dataType: "string",
                    description: "",
                }
            ],
        },

        {
            entityTableName: "name_changes",
            description: "",
            keys: [{
                    keyName: "first_name",
                    dataType: "string",
                    description: "",
                },
                {
                    keyName: "last_name",
                    dataType: "string",
                    description: "",
                },
                {
                    keyName: "middle_name",
                    dataType: "string",
                    description: "",
                },
                {
                    keyName: "reference_number",
                    dataType: "string",
                    description: "",
                },
                {
                    keyName: "user_id",
                    dataType: "string",
                    description: "",
                },
                {
                    keyName: "malware_scan_result",
                    dataType: "string",
                    description: "",
                }
            ],
        }

    ],
});
