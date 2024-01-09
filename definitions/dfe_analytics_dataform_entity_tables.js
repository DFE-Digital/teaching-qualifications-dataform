const dfeAnalyticsDataform = require("dfe-analytics-dataform");

dfeAnalyticsDataform({
    eventSourceName: "entity_tables",
    bqProjectName: "teaching-qualifications",
    bqDatasetName: "events_production",
    bqEventsTableName: "events",
    urlRegex: "(?i)(check-a-teachers-record.education.gov.uk|check-the-childrens-barred-list.education.gov.uk|access-your-teaching-qualifications.education.gov.uk)",
    dataSchema: [{
        entityTableName: "search_logs",
        description: "",
        keys: [{
                keyName: "dsi_user_id",
                dataType: "integer",
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
                keyName: "result_count",
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
            },
        ],
    },],
}
);
