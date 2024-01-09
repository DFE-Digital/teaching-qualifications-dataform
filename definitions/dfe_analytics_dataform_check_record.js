const dfeAnalyticsDataform = require("dfe-analytics-dataform");

dfeAnalyticsDataform({
    eventSourceName: "check_record",
    bqProjectName: "teaching-qualifications",
    bqDatasetName: "events_production",
    bqEventsTableName: "events",
    bqEventsTableNameSpace: "check-a-teachers-record",
    urlRegex: "check-a-teachers-record.education.gov.uk",
  transformEntityEvents: false,
  dataSchema: []
});