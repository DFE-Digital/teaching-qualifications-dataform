const dfeAnalyticsDataform = require("dfe-analytics-dataform");

dfeAnalyticsDataform({
    eventSourceName: "teaching_qualifications",
    bqProjectName: "teaching-qualifications",
    bqDatasetName: "events_production",
    bqEventsTableName: "events",
    bqEventsTableNameSpace: "access-your-teaching-qualifications",
    urlRegex: "access-your-teaching-qualifications.education.gov.uk",
    transformEntityEvents: false,
    hiddenPolicyTagLocation: "projects/teaching-qualifications/locations/europe-west2/taxonomies/5159319666739647034/policyTags/2606812594222933114",
    dataSchema: []
});
