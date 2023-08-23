const dfeAnalyticsDataform = require("dfe-analytics-dataform");

dfeAnalyticsDataform({
  eventSourceName: "teaching_qualifications",
  bqProjectName: "teaching-qualifications",
  bqDatasetName: "events_production",
  bqEventsTableName: "events",
  urlRegex: "access-your-teaching-qualifications.education.gov.uk",
  transformEntityEvents: false,
  dataSchema: []
});