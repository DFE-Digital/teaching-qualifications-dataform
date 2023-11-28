const dfeAnalyticsDataform = require("dfe-analytics-dataform");

dfeAnalyticsDataform({
    eventSourceName: "check_record",
    bqProjectName: "teaching-qualifications",
    bqDatasetName: "events_production",
    bqEventsTableName: "events",
    bqEventsTableNameSpace: "check-the-record-of-a-teacher",
    urlRegex: "check-the-record-of-a-teacher.education.gov.uk",
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
            },
        ],
    }, ],
});
