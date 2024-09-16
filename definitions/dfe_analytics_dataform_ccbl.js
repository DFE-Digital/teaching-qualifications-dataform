const dfeAnalyticsDataform = require("dfe-analytics-dataform");

dfeAnalyticsDataform({
    eventSourceName: "ccbl",
    bqProjectName: "teaching-qualifications",
    bqDatasetName: "ccbl_events_production",
    bqEventsTableName: "events",
    urlRegex: "check-the-childrens-barred-list.education.gov.uk",
    transformEntityEvents: false,
    hiddenPolicyTagLocation: "projects/teaching-qualifications/locations/europe-west2/taxonomies/5159319666739647034/policyTags/2606812594222933114",
    dataSchema: []
});
