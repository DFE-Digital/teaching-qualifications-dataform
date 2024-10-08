const dfeAnalyticsDataform = require("dfe-analytics-dataform");

dfeAnalyticsDataform({
    eventSourceName: "ccbl_entity_tables",
    bqProjectName: "teaching-qualifications",
    bqDatasetName: "ccbl_events_production",
    bqEventsTableName: "events",
    urlRegex: "(?i)(check-the-childrens-barred-list.education.gov.uk)",
    hiddenPolicyTagLocation: "projects/teaching-qualifications/locations/europe-west2/taxonomies/5159319666739647034/policyTags/2606812594222933114",
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
                    hidden:true,
                },
                {
                    keyName: "result_returned",
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
            ],
        },
        {
            entityTableName: "dsi_users",
            description: "",
            keys: [{
                    keyName: "uid",
                    dataType: "string",
                    description: "",
                    hidden: true,
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
                    hidden:true,
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
        }
    ],
});
