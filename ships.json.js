window['hull-ships-registry:hull-ships']([{"url":"https://segment.hull.io/manifest.json","manifest":{"name":"Segment","description":"Receive Events from Segment, send updated data to Segment","tags":["incoming","outgoing"],"picture":"picture.png","ui":false,"admin":"admin.html","readme":"readme.md","version":"0.0.1","deployment_settings":[{"name":"_selector","default":"body","type":"string","format":"string"},{"name":"_placement","default":"append","type":"string","format":"string"}],"settings":[{"name":"write_key","title":"Write Key","description":"Segment Write Key, found in Project Settings > Keys","type":"string","format":"text"},{"name":"handle_groups","title":"Handle Groups","description":"Applies group attributes to as user traits, prefixed with group__","type":"boolean","default":false,"format":"hidden"}],"resources":[],"subscriptions":[{"url":"/notify"}]}},{"url":"https://hull-optimizely.herokuapp.com/manifest.json","manifest":{"name":"Optimizely","description":"Send Hull Segments as Optimizely audiences, use it to personalize for each customer","tags":["client","outgoing"],"picture":"picture.png","index":"ship.js","readme":"readme.md","ui":false,"version":"0.0.1","settings":[{"name":"audiences","format":"hidden","type":"array","items":{"type":"object","properties":{"name":{"type":"string"},"audience_id":{"type":"integer"},"segment_id":{"type":"string"}},"required":["name","segment_id","audience_id"]}}],"private_settings":[{"name":"optimizely_api_key","title":"Optimizely API Key","type":"string","required":true},{"name":"optimizely_project_id","title":"Optimizely Project ID","type":"integer","required":true}],"subscriptions":[{"url":"/notify"}]}},{"url":"https://hull-salesforce.herokuapp.com/manifest.json","manifest":{"name":"Salesforce","tags":["outgoing"],"description":"Send Users as Leads or Contacts to Salesforce with custom mappings","readme":"readme.md","version":"0.1.1","picture":"picture.png","ui":false,"settings":[],"private_settings":[{"name":"salesforce_login","type":"string","required":true},{"name":"salesforce_password","type":"string","required":true},{"name":"salesforce_login_url","type":"string","required":true,"default":"https://login.salesforce.com"},{"name":"segment_id","type":"string","title":"Segment ID to sync (optional)","description":"Select a segment to sync with Salesforce","pattern":"^[a-z0-9]{24}$","format":"hidden"},{"name":"leads_mapping","title":"Leads","type":"array","default":[{"hull_field_name":"first_name","salesforce_field_name":"FirstName","default_value":"[Unknown]","overwrite":false},{"hull_field_name":"last_name","salesforce_field_name":"LastName","default_value":"[Unknown]","overwrite":false},{"hull_field_name":"email","salesforce_field_name":"Email","overwrite":false}],"items":{"type":"object","properties":{"hull_field_name":{"type":"string","title":"Hull Field"},"salesforce_field_name":{"type":"string","title":"Salesforce Field"},"overwrite":{"type":"boolean","title":"Data from Hull overwrites data on Salesforce","default":false},"default_value":{"type":"string","title":"Default Value"},"tpl":{"type":"string","title":"Template for calculated value"}},"required":["hull_field_name","salesforce_field_name"]}},{"name":"contacts_mapping","title":"Contact","type":"array","default":[{"hull_field_name":"first_name","salesforce_field_name":"FirstName","default_value":"[Unknown]","overwrite":false},{"hull_field_name":"last_name","salesforce_field_name":"LastName","default_value":"[Unknown]","overwrite":false},{"hull_field_name":"email","salesforce_field_name":"Email","overwrite":false}],"items":{"type":"object","properties":{"hull_field_name":{"type":"string","title":"Hull Field"},"salesforce_field_name":{"type":"string","title":"Salesforce Field"},"overwrite":{"type":"boolean","title":"Data from Hull overwrites data on Salesforce","default":false},"default_value":{"type":"string","title":"Default Value"},"tpl":{"type":"string","title":"Template for calculated value"}},"required":["hull_field_name","salesforce_field_name"]}}],"subscriptions":[{"url":"/notify"}]}},{"url":"https://hull-slack.herokuapp.com/manifest.json","manifest":{"name":"Slack","description":"Noify a Slack Channel whenever a User enters or leaves a Segment","tags":["outgoing"],"picture":"picture.png","version":"0.0.1","settings":[{"name":"hook_url","title":"Webhook URL","description":"Slack Webhook Url, (see https://api.slack.com/incoming-webhooks and create one here )","default":"https://hooks.slack.com/services/xxxx/xxx/xxx","type":"string","format":"text"},{"name":"channel","title":"Slack Channel","description":"Where to send notifications?. Default is the one specified in Slack settings","type":"string","format":"text"},{"name":"username","title":"Bot Name","description":"Change Bot name. Default is the one specified in Slack settings","default":"Hull","type":"string","format":"text"},{"name":"icon_url","title":"Avatar","description":"Your bot's Avatar, Default is the one specified in Slack settings","type":"string","format":"image"}],"deployment_settings":[],"resources":[],"readme":"readme.md","ui":false,"subscriptions":[{"url":"/notify"}]}},{"url":"https://hull-zapier.herokuapp.com/manifest.json","manifest":{"name":"Zapier","description":"Notify Zapier whenever a User enters or Leaves a Segment","tags":["outgoing"],"picture":"picture.png","version":"0.0.1","settings":[{"name":"zap_url","title":"Zap URL","description":"Zapier Webhook Url","default":"https://zapier.com/hooks/catch/xxx/","type":"string","format":"text"}],"deployment_settings":[],"resources":[],"readme":"readme.md","ui":false,"subscriptions":[{"url":"/notify"}]}},{"url":"https://hull-instagram.herokuapp.com/manifest.json","manifest":{"name":"Instagram","description":"Store Instagram new picture as Hull Events","picture":"picture.png","key":"instagram","version":"0.0.1","settings":[],"private_settings":[{"name":"subscription_id","title":"Webhook subscription id","type":"string","default":"","format":"hidden"}],"deployment_settings":[],"resources":[],"readme":"readme.md","ui":false,"subscriptions":[{"url":"/notify"}]}},{"url":"https://hull-clearbit.herokuapp.com/manifest.json","manifest":{"name":"Clearbit","description":"Fetch additional customer data from Clearbit","tags":["incoming","outgoing"],"picture":"picture.png","ui":false,"readme":"readme.md","version":"0.0.1","private_settings":[{"name":"excluded_domains","title":"Email Domain Excludes","description":"Domains to exclude from fetching. Comma Separated","type":"string","format":"text"},{"name":"api_key","title":"Clearbit API Key","description":"Clearbit API Key, found in https://dashboard.clearbit.com/keys","type":"string","format":"text"}],"resources":[],"subscriptions":[{"url":"/notify"}]}},{"url":"https://hull-computed-traits.herokuapp.com/manifest.json","manifest":{"name":"Computed Traits","description":"Recompute custom properties with Javascript logic whenever a user is updated","tags":["incoming","outgoing"],"picture":"picture.png","ui":false,"admin":"admin.html","readme":"readme.md","version":"0.0.1","private_settings":[{"name":"sentry_dsn","title":"Sentry DSN","description":"URL of a sentry instance to collect logs and exception notifications","type":"string","format":"hidden"},{"name":"code","title":"Code","description":"Custom javascript code","type":"string","format":"code"}],"resources":[],"subscriptions":[{"url":"/notify"}]}},{"url":"https://hull-facebook-audiences.herokuapp.com/manifest.json","manifest":{"name":"Facebook Audiences","description":"Send Hull Segments to Facebook Custom audiences","tags":["outgoing"],"picture":"picture.png","ui":false,"admin":"admin.html","readme":"readme.md","version":"0.0.1","private_settings":[{"name":"facebook_access_token","title":"Facebook Access Token","type":"string","format":"hidden"},{"name":"facebook_ad_account_id","title":"Facebook Ad Account ID","type":"string","format":"hidden"}],"resources":[],"subscriptions":[{"url":"/notify"}]}},{"url":"https://hull-datanyze.herokuapp.com/manifest.json","manifest":{"name":"Datanyze","description":"Fetch additional customer data from Datanyze","tags":["outgoing"],"picture":"picture.png","ui":false,"readme":"readme.md","version":"0.0.1","private_settings":[{"name":"excluded_domains","title":"Email Domain Excludes","description":"Domains to exclude from fetching. Comma Separated","type":"string","format":"text"},{"name":"token","title":"Datanyze Token","description":"Datanyze Token","type":"string","format":"text"},{"name":"username","title":"Datanyze Username","description":"Datanyze Username or Email","type":"string","format":"text"}],"resources":[],"subscriptions":[{"url":"/notify"}]}}]);