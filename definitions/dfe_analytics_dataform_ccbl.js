const dfeAnalyticsDataform = require("dfe-analytics-dataform");

dfeAnalyticsDataform({
  eventSourceName: "check_child_barred_list",
  bqProjectName: "teaching-qualifications",
  bqDatasetName: "ccbl_events_production",
  bqEventsTableName: "events",
  urlRegex: "check-the-childrens-barred-list.education.gov.uk",
  transformEntityEvents: false,
  dataSchema: []
});