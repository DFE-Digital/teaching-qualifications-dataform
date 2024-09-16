const dfeAnalyticsDataform = require("dfe-analytics-dataform");

dfeAnalyticsDataform({
            eventSourceName: "entity_tables",
            bqProjectName: "teaching-qualifications",
            bqDatasetName: "events_production",
            bqEventsTableName: "events",
            urlRegex: "(?i)(check-a-teachers-record.education.gov.uk|access-your-teaching-qualifications.education.gov.uk)",
            hiddenPolicyTagLocation: "projects/teaching-qualifications/locations/europe-west2/taxonomies/5159319666739647034/policyTags/2606812594222933114",
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
                            keyName: "result_count",
                            dataType: "string",
                            description: "",
                        },
                         {
                            keyName: "search_type",
                            dataType: "string",
                            description: "",
                        },
                    ],
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
                        {
                            keyName: "service",
                            dataType: "string",
                            description: "",
                        },
                    ],
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
                        },
                        {
                            keyName: "first_name",
                            dataType: "string",
                            description: "",
                        },
                        {
                            keyName: "last_name",
                            dataType: "string",
                            description: "",
                        },
                        {
                            keyName: "terms_and_conditions_accepted_at",
                            dataType: "string",
                            description: "",
                        },
                        {
                            keyName: "terms_and_conditions_version_accepted",
                            dataType: "string",
                            description: "",
                        },
                    ],
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
                        },
                    ],
                },
                {
                    entityTableName: "users",
                    description: "",
                    keys: [{
                            keyName: "trn",
                            dataType: "string",
                            description: "",
                        },
                        {
                            keyName: "auth_uuid",
                            dataType: "string",
                            description: "",
                        },
                        {
                            keyName: "auth_provider",
                            dataType: "string",
                            description: "",
                        },{
                            keyName: "date_of_birth",
                            dataType: "string",
                            description: "",
                        },
                        {
                            keyName: "email",
                            dataType: "string",
                            description: "",
                        },
                        {
                            keyName: "family_name",
                            dataType: "string",
                            description: "",
                        },{
                            keyName: "given_name",
                            dataType: "string",
                            description: "",
                        },
                        {
                            keyName: "name",
                            dataType: "string",
                            description: "",
                        },
                        {
                            keyName: "one_login_verified_birth_date",
                            dataType: "string",
                            description: "",
                        },
                        {
                            keyName: "one_login_verified_name",
                            dataType: "string",
                            description: "",
                        },
                        ],
                    },
                ],
            });


