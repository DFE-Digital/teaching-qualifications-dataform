const dfeAnalyticsDataform = require("dfe-analytics-dataform");

dfeAnalyticsDataform({
    eventSourceName: "cbl_entity_tables",
    bqProjectName: "teaching-qualifications",
    bqDatasetName: "ccbl_events_production",
    bqEventsTableName: "events",
    urlRegex: "(?i)(check-the-childrens-barred-list.education.gov.uk)",
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
            },
            {
                keyName: "date_of_birth",
                dataType: "string",
                description: "",
            },
            {
                keyName: "result_returned",
                dataType: "string",
                description: "",
            },],
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
            },],
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
            },],   
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
            },],   
        },
    ],
});
