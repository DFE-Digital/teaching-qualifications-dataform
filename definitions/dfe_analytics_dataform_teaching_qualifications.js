const dfeAnalyticsDataform = require("dfe-analytics-dataform");

dfeAnalyticsDataform({
    eventSourceName: "teaching_qualifications",
    bqProjectName: "teaching-qualifications",
    bqDatasetName: "events_production",
    bqEventsTableName: "events",
    bqEventsTableNameSpace: "access-your-teaching-qualifications",
    urlRegex: "access-your-teaching-qualifications.education.gov.uk",
    transformEntityEvents: false,
    dataSchema: []
});
