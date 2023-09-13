const dfeAnalyticsDataform = require("dfe-analytics-dataform");

dfeAnalyticsDataform({
  eventSourceName: "check_record",
  bqProjectName: "teaching-qualifications",
  bqDatasetName: "events_production",
  bqEventsTableName: "events_production.events",
  bqEventsTableNameSpace: "check-the-record-of-a-teacher",
  urlRegex: "check-the-record-of-a-teacher.education.gov.uk",
  transformEntityEvents: false,
  dataSchema: []
});