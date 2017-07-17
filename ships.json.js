window['hull-ships-registry:hull-ships']([{"url":"https://segment.hull.io/manifest.json","manifest":{"name":"Segment","description":"Receive Events from Segment, send updated data to Segment","tags":["incoming","outgoing","batch","oneColumn"],"index":"ship.js","picture":"picture.png","ui":false,"admin":"admin.html","readme":"readme.md","version":"0.1.1","deployment_settings":[{"name":"_selector","default":"body","type":"string","format":"string"},{"name":"_placement","default":"append","type":"string","format":"string"}],"private_settings":[{"name":"sending_title","title":"Sending data to segment","format":"title","type":"string"},{"name":"sending_hero","title":"Important Note","headerTemplate":"**Users can only be send to segment.com when at least one identifier is present, this can be either the `External ID` or one or more `Anonymous IDs`.**","format":"information","type":"string"},{"name":"synchronized_segments","title":"Skips Users who don't belong to any of these segments","description":"Sends everyone if empty.","type":"array","format":"segment","items":{"type":"string"},"default":[]},{"name":"synchronized_properties","title":"Send Attributes to Segment.com","description":"Only sends list of user segments as 'hull_segments' attribute if empty.","type":"array","format":"trait","items":{"type":"string"},"default":[]},{"name":"send_events","title":"Send Events to Segment.com","description":"Sends everything if empty","type":"array","format":"event","default":["Entered segment","Left segment"]},{"name":"forward_events","title":"Allow forwarding events received from Segment.com","description":"Do NOT enable if Segment.com source and destination are the same. It could result in duplicates","type":"boolean","default":false}],"settings":[{"name":"write_key","title":"Write Key","description":"Segment Write Key, found in Project Settings > Keys","type":"string","format":"text"},{"name":"receiving_title","title":"Receiving data from Segment","format":"title","type":"string"},{"name":"handle_pages","title":"Handle Pages","description":"Store analytics.page() events. Can generate a lot of volume","type":"boolean","default":false},{"name":"handle_screens","title":"Handle Screens","description":"Store analytics.screen() events. Can generate a lot of volume","type":"boolean","default":false},{"name":"public_id_field","title":"Public ID Field","description":"User field to use as the userId field for data sent to segment","type":"string","enum":["id","external_id"],"default":"external_id","format":"hidden"},{"name":"handle_groups","title":"Handle Groups","description":"Handle group attributes as user traits, prefixed with 'group/'","type":"boolean","default":false},{"name":"handle_accounts","title":"Handle Accounts","description":"Handle group attributes as account traits","type":"boolean","default":false}],"resources":[],"subscriptions":[{"url":"/notify"}]}},{"url":"https://hull-optimizely.herokuapp.com/manifest.json","manifest":{"name":"Optimizely","description":"Send Hull Segments as Optimizely audiences, use it to personalize for each customer","tags":["client","outgoing"],"picture":"picture.png","index":"ship.js","readme":"readme.md","ui":false,"version":"0.0.1","settings":[{"name":"audiences","format":"hidden","type":"array","items":{"type":"object","properties":{"name":{"type":"string"},"audience_id":{"type":"integer"},"segment_id":{"type":"string"}},"required":["name","segment_id","audience_id"]}}],"private_settings":[{"name":"optimizely_api_key","title":"Optimizely API Key","type":"string","required":true},{"name":"optimizely_project_id","title":"Optimizely Project ID","type":"integer","required":true}],"subscriptions":[{"url":"/notify"}]}},{"url":"https://hull-salesforce.herokuapp.com/manifest.json","manifest":{"name":"Salesforce","tags":["outgoing","oneColumn","batch"],"description":"Send Users as Leads or Contacts to Salesforce with custom mappings","readme":"readme.md","admin":"/auth","version":"0.2.5","picture":"picture.png","ui":false,"settings":[{"name":"last_sync_at","type":"number","format":"hidden"}],"private_settings":[{"name":"salesforce_oauth_url","type":"string","format":"hidden","default":"https://login.salesforce.com"},{"name":"refresh_token","type":"string","format":"hidden"},{"name":"access_token","type":"string","format":"hidden"},{"name":"instance_url","type":"string","format":"hidden"},{"name":"synchronized_segments","title":"Filter users","description":"Only send Users matching one or more of these segments. Sends everyone if empty.","type":"array","format":"segment","items":{"type":"string"},"default":[]},{"name":"leads","title":"Leads sync","format":"title","type":"string"},{"name":"leads_mapping","title":"List of Lead fields to push to Salesforce","type":"array","format":"table","default":[{"hull_field_name":"first_name","salesforce_field_name":"FirstName","default_value":"[Unknown]","overwrite":false},{"hull_field_name":"last_name","salesforce_field_name":"LastName","default_value":"[Unknown]","overwrite":false},{"hull_field_name":"email","salesforce_field_name":"Email","overwrite":false}],"items":{"type":"object","properties":{"hull_field_name":{"type":"string","format":"trait","title":"Hull Field"},"salesforce_field_name":{"type":"string","title":"Salesforce Field","format":"select","options":{"loadOptions":"/schema/lead_updateable"}},"overwrite":{"type":"boolean","title":"overwrite","default":false}},"required":["hull_field_name","salesforce_field_name"]}},{"name":"fetch_lead_fields","title":"List of Lead fields to fetch from Salesforce","type":"array","format":"select","options":{"loadOptions":"/schema/lead"}},{"name":"contacts","title":"Contacts sync","format":"title","type":"string"},{"name":"contacts_mapping","title":"List of Contact fields to push to Salesforce","type":"array","format":"table","default":[{"hull_field_name":"first_name","salesforce_field_name":"FirstName","default_value":"[Unknown]","overwrite":false},{"hull_field_name":"last_name","salesforce_field_name":"LastName","default_value":"[Unknown]","overwrite":false},{"hull_field_name":"email","salesforce_field_name":"Email","overwrite":false}],"items":{"type":"object","properties":{"hull_field_name":{"type":"string","format":"trait","title":"Hull Field"},"salesforce_field_name":{"type":"string","title":"Salesforce Field","format":"select","options":{"loadOptions":"/schema/contact_updateable"}},"overwrite":{"type":"boolean","title":"Hull overwrites Salesforce","default":false}},"required":["hull_field_name","salesforce_field_name"]}},{"name":"fetch_contact_fields","title":"List of Contact fields to fetch from Salesforce","type":"array","format":"select","options":{"loadOptions":"/schema/contact"}}],"schedules":[{"url":"/sync","type":"cron","value":"*/5 * * * *"}],"subscriptions":[{"url":"/notify"}]}},{"url":"https://hull-slack.herokuapp.com/manifest.json","manifest":{"name":"Slack","description":"Notify a Slack Channel whenever a User enters or leaves a Segment","picture":"picture.png","version":"0.0.3","tags":["incoming","outgoing","oneColumn"],"settings":[],"private_settings":[{"name":"token","title":"Token","type":"string","format":"hidden"},{"name":"team_id","title":"team_id","type":"string","format":"hidden"},{"name":"user_id","title":"user_id","type":"string","format":"hidden"},{"name":"incoming_webhook","title":"Incoming Webhook","type":"object","format":"hidden","properties":{"url":{"title":"url","type":"string"},"channel":{"title":"channel","type":"string"},"channel_id":{"title":"channel_id","type":"string"},"configuration_url":{"title":"configuration_url","type":"string"}}},{"name":"bot","title":"Bot","type":"object","format":"hidden","properties":{"bot_user_id":{"title":"bot_user_id","type":"string"},"bot_access_token":{"title":"bot_access_token","type":"string"}}},{"name":"whitelist","title":"Attributes to send (none sends everything)","type":"array","default":[],"format":"trait"},{"name":"notify_header","title":"Notifications","type":"string","format":"title"},{"name":"notify_segments","title":"Notify when Segments change","type":"array","format":"table","default":[{"segment":"","channel":""}],"items":{"type":"object","required":["channel","segment"],"properties":{"segment":{"title":"Segment Name","type":"string","format":"segment"},"channel":{"title":"@user or #channel","type":"string","format":"string"},"enter":{"title":"Notify on enter","type":"boolean","format":"checkbox"},"leave":{"title":"Notify on leave","type":"boolean","format":"checkbox"}}}},{"name":"notify_events","title":"Notify when events performed","type":"array","format":"table","default":[{"event":"","channel":""}],"items":{"type":"object","required":["channel","event"],"properties":{"event":{"title":"Event Name","type":"string","format":"event"},"channel":{"title":"@user or #channel","type":"string","format":"string"}}}},{"name":"button_header","title":"Actions","type":"string","format":"title"},{"name":"actions","title":"Add Action Buttons to update User attributes on click","default":[{"label":"","property":"","value":""}],"type":"array","format":"table","items":{"type":"object","properties":{"label":{"title":"Button Label","type":"string"},"property":{"title":"Property name","type":"string","format":"trait"},"value":{"title":"Property Value","type":"string"}}}}],"deployment_settings":[],"resources":[],"readme":"readme.md","admin":"/auth/","ui":false,"subscriptions":[{"url":"/notify"}]}},{"url":"https://hull-instagram.herokuapp.com/manifest.json","manifest":{"name":"Instagram","description":"Store Instagram new picture as Hull Events","picture":"picture.png","key":"instagram","version":"0.0.1","settings":[],"private_settings":[{"name":"subscription_id","title":"Webhook subscription id","type":"string","default":"","format":"hidden"}],"deployment_settings":[],"resources":[],"readme":"readme.md","ui":false,"subscriptions":[{"url":"/notify"}]}},{"url":"https://hull-clearbit.herokuapp.com/manifest.json","manifest":{"name":"Clearbit","description":"Fetch additional customer data from Clearbit","picture":"picture.png","version":"0.1.4","tags":["incoming","outgoing","batch","oneColumn"],"private_settings":[{"type":"string","format":"title","name":"credentials","title":"Credentials"},{"name":"api_key","title":"Clearbit API Key","description":"Get it from https://dashboard.clearbit.com/keys","type":"string","format":"text"},{"type":"string","format":"title","name":"enrich_info","title":"Enrichment","description":"The Enrichment API lets you look up person and company data based on an email or domain"},{"name":"enrich_enabled","title":"Enable Enrichment","description":"Enrich users with their user and company information","type":"boolean","default":true},{"name":"enrich_segments","title":"Enrich users only if they match any of these segments","type":"array","format":"segment","items":{"type":"string"},"default":[]},{"type":"string","format":"title","name":"reveal","title":"Reveal"},{"name":"reveal_enabled","title":"Enable Reveal","description":"Reveal anonymous visitors' company information","type":"boolean","default":false},{"type":"string","format":"information","name":"reveal_information","description":"Reveal setup","headerTemplate":"For Reveal to operate, you need to enable **Guest Users** from your [Dashboard Settings](../../settings)"},{"name":"reveal_prospect_min_contacts","title":"Minimum distinct anonymous visitors from a company to trigger prospection","type":"number","format":"range","default":1,"minimum":1,"maximum":10,"multipleOf":1},{"type":"string","format":"title","name":"discovery_info","title":"Discovery","description":"The Discovery API lets you search for companies that are similar to your existing customers."},{"name":"discover_enabled","title":"Enable Discovery","description":"Search for companies similar to the ones you are interested in","type":"boolean","default":false},{"name":"discover_segments","title":"Search for companies similar to users who match any of these segments","type":"array","format":"segment","items":{"type":"string"},"default":[]},{"name":"discover_limit_count","title":"Maximum number of companies to fetch","type":"number","format":"range","default":5,"minimum":1,"maximum":10,"multipleOf":1},{"type":"string","format":"title","name":"prospect_info","title":"Prospector"},{"name":"prospect_enabled","title":"Enable Prospector","description":"Search for people in companies you Revealed or Discovered","type":"boolean","default":false},{"name":"handle_accounts","title":"Handle Accounts","description":"Save account objects instead of user objects in the clearbit_company group","type":"boolean","default":false},{"name":"prospect_domain","title":"Search using company domain","type":"string","format":"trait","default":"domain"},{"name":"prospect_segments","title":"Automatically fetch prospects for companies who match any of these segments","type":"array","format":"segment","items":{"type":"string"},"default":[]},{"name":"prospect_limit_count","title":"Maximum number of prospects to fetch per company","type":"number","format":"range","default":5,"minimum":1,"maximum":20,"multipleOf":1},{"name":"prospect_filter_role","title":"Prospect Role","type":"string","format":"select","enum":["","ceo","communications","consulting","customer_service","education","engineering","finance","founder","health_professional","human_resources","information_technology","legal","marketing","operations","owner","president","product","public_relations","real_estate","recruiting","research","sales"]},{"name":"prospect_filter_seniority","title":"Prospect Seniority","type":"string","format":"select","enum":["","executive","director","manager"]},{"name":"prospect_filter_titles","title":"Prospect Titles","type":"array","items":{"title":"Title","type":"string"},"format":"select","options":{"allowCreate":true}}],"resources":[],"readme":"readme.md","admin":"admin.html","ui":false,"subscriptions":[{"url":"/notify"}]}},{"url":"https://hull-facebook-audiences.herokuapp.com/manifest.json","manifest":{"name":"Facebook Audiences","description":"Send Hull Segments to Facebook Custom audiences","tags":["outgoing","oneColumn"],"picture":"picture.png","ui":false,"admin":"admin","readme":"readme.md","version":"0.1.1","private_settings":[{"name":"facebook_access_token","title":"Facebook Access Token","type":"string","format":"hidden"},{"name":"facebook_ad_account_id","title":"Facebook Ad Account ID","type":"string","format":"hidden"},{"name":"synchronized_segments","title":"Segments","description":"Sync to Facebook these segments.","default":[],"type":"array","format":"segment"},{"type":"string","name":"matching_fields","title":"Matching Fields","format":"title","description":"The fields which are sent to custom audiences to build matching."},{"title":"Email Adress","name":"field_email","type":"string","format":"trait","default":"email"},{"title":"First Name","name":"field_first_name","type":"string","format":"trait","default":"first_name"},{"title":"Last Name","name":"field_last_name","type":"string","format":"trait","default":"last_name"},{"title":"Phone","name":"field_phone","type":"string","format":"trait","default":"phone"},{"title":"Gender","name":"field_gender","type":"string","format":"trait"},{"title":"US State","name":"field_state","type":"string","format":"trait"},{"title":"City","name":"field_city","type":"string","format":"trait","default":"address_city"},{"title":"Country","name":"field_country","type":"string","format":"trait","default":"address_country"}],"resources":[],"subscriptions":[{"url":"/notify"}]}},{"url":"https://hull-datanyze.herokuapp.com/manifest.json","manifest":{"name":"Datanyze","description":"Fetch additional customer data from Datanyze","tags":["outgoing","batch","oneColumn"],"admin":"/admin/","picture":"picture.png","ui":false,"readme":"readme.md","version":"0.2.2","private_settings":[{"name":"synchronized_segments","title":"Filtered Segments","description":"Only send if user matches one of these segments. Empty sends no one.","default":[],"type":"array","format":"segment"},{"name":"target_trait","title":"Domain Lookup Field","description":"Choose which field to use to lookup a domain name","type":"string","format":"trait","default":"domain"},{"name":"excluded_domains","title":"Domain Excludes","description":"Domains to exclude from fetching. Comma Separated","type":"string","format":"text"},{"name":"token","title":"Datanyze Token","description":"Datanyze Token","type":"string","format":"text"},{"name":"username","title":"Datanyze Username","description":"Datanyze Username or Email","type":"string","format":"text"}],"resources":[],"subscriptions":[{"url":"/notify"}]}},{"url":"https://hull-nutshell.herokuapp.com/manifest.json","manifest":{"name":"Nutshell","tags":["outgoing","batch","oneColumn"],"description":"Send Users as Leads or Contacts to Nutshell with custom mappings","version":"0.2.0","picture":"picture.png","ui":false,"readme":"readme.md","settings":[],"private_settings":[{"name":"form_api_url","title":"Nutshell Form API url","type":"string","required":true},{"name":"synchronized_segments","title":"Filter users","description":"Only send users who match these segments to Segment.com. Keep empty to send everyone.","type":"array","format":"segment","items":{"type":"string"},"default":[]},{"name":"mapping","title":"Fields Mapping","type":"array","default":[{"hull":"name","nutshell":"contact.name","is_required":true},{"hull":"email","nutshell":"contact.email","is_required":true}],"items":{"type":"object","properties":{"hull":{"type":"string","format":"template","title":"Hull Field"},"nutshell":{"type":"string","title":"Nutshell Field"},"is_required":{"title":"Is required","description":"Skip sync if this field is not defined","type":"boolean"}},"required":["hull","nutshell","is_required"]}}],"subscriptions":[{"url":"/notify"}]}},{"url":"https://hull-mailchimp.herokuapp.com/manifest.json","manifest":{"name":"Mailchimp","description":"Synchronize Segments as Mailchimp Lists","tags":["outgoing","incoming","batch","oneColumn"],"picture":"picture.png","admin":"/auth/","version":"0.2.4","private_settings":[{"name":"synchronized_segments","title":"Filtered Segments","description":"Only sync users in at least one these segments (Empty to send everyone)","type":"array","format":"segment"},{"name":"mailchimp_list_id","title":"Mailchimp List ID","description":"Mailchimp List ID selected by user","type":"string","format":"hidden"},{"name":"mailchimp_list_name","title":"Mailchimp List Name","description":"Mailchimp List Name selected by user","type":"string","format":"hidden"},{"name":"api_key","title":"API Key","description":"Token or API Key","type":"string","format":"hidden"},{"name":"api_endpoint","title":"API Endpoint","description":"Mailchimp API endpoint","type":"string","format":"hidden"},{"name":"domain","title":"API Domain","description":"Mailchimp API Domain","type":"string","format":"hidden"},{"name":"segment_mapping","type":"object","properties":{},"format":"hidden"},{"name":"interest_category_id","title":"Interest category ID","type":"string","format":"hidden"},{"name":"interests_mapping","type":"object","properties":{},"format":"hidden"},{"name":"sync_fields_to_mailchimp","title":"List of User attributes to push to Mailchimp","type":"array","format":"table","default":[{"hull":"first_name","name":"FNAME","overwrite":true},{"hull":"last_name","name":"LNAME","overwrite":true}],"items":{"type":"object","properties":{"hull":{"type":"string","format":"trait","title":"Hull Attribute"},"name":{"type":"string","format":"select","title":"Mailchimp Merge Field","options":{"allowCreate":false,"loadOptions":"/schema/user_fields"}},"overwrite":{"type":"boolean","title":"Hull overwrites Mailchimp","default":false}},"required":["hull","name"]}}],"readme":"readme.md","ui":false,"subscriptions":[{"url":"/notify"}],"schedules":[{"url":"/track","type":"cron","value":"7 */6 * * *"}]}},{"url":"https://hull-processor.herokuapp.com/manifest.json","manifest":{"name":"Processor","description":"Recompute custom properties and emit events with Javascript logic whenever a user is updated","tags":["incoming","outgoing","batch","oneColumn"],"picture":"picture.png","ui":false,"admin":"admin.html","readme":"readme.md","version":"0.0.2","private_settings":[{"name":"sentry_dsn","title":"Sentry DSN","description":"URL of a sentry instance to collect logs and exception notifications","type":"string","format":"hidden"},{"name":"code","title":"Code","description":"Enter Javascript code here, It will receive the data in the middle column, can emit `track()` and `traits()`. Preview results on the right. Save when finished","type":"string","default":"console.log(`Hello ${user.name}`);\n// traits({ coconuts: 12 });\n// traits({ coconuts: 13 });\n// traits({ coconuts: 14 }, { source: 'clearbit' });\n// //BEWARE - if you track() without a if() condition you trigger an infinite loop.\n// //if(false) { track('Viewed Monthy Python', { coconuts: 12 });}","format":"hidden"}],"resources":[],"subscriptions":[{"url":"/notify"}]}},{"url":"https://hull-logger.herokuapp.com/manifest.json","manifest":{"name":"Logger","description":"Log updates passing through Hull","tags":["outgoing","oneColumn"],"picture":"picture.png","ui":false,"admin":"admin.html","readme":"readme.md","version":"0.0.1","private_settings":[],"resources":[],"subscriptions":[{"url":"/notify"}]}},{"url":"https://hull-hubspot.herokuapp.com/manifest.json","manifest":{"name":"Hubspot","description":"Sync a Hubspot Channel whenever a User enters or leaves a Segment","picture":"picture.png","version":"0.3.7","tags":["outgoing","incoming","batch","oneColumn"],"settings":[],"private_settings":[{"name":"synchronized_segments","title":"Segments","description":"Post to Hubspot when users match these segments (Empty to send everyone)","default":[],"type":"array","format":"segment"},{"name":"sync_fields_to_hubspot","title":"Custom Fields Sync (Hull to Hubspot)","type":"array","format":"table","items":{"type":"object","properties":{"hull":{"title":"Hull Field ID","type":"string","format":"trait","options":{"placeholder":"Enter a Hull field id"}},"name":{"title":"Hubspot Field ID","type":"string","format":"select","options":{"allowCreate":true,"loadOptions":"/schema/contact_properties"}},"overwrite":{"type":"boolean","title":"Hull overwrites Hubspot","default":false}}}},{"name":"sync_fields_to_hull","title":"Custom Fields Sync (Hubspot to Hull)","type":"array","format":"table","items":{"type":"object","properties":{"name":{"title":"Hubspot Field ID","type":"string","format":"select","options":{"allowCreate":false,"loadOptions":"/schema/contact_properties"}},"hull":{"title":"Hull Field ID","type":"string","format":"trait","options":{"placeholder":"Enter a Hull field id","allowCreate":true,"source":"hubspot"}}}}},{"name":"token","title":"Token","type":"string","format":"hidden"},{"name":"portal_id","title":"Portal ID","type":"string","format":"hidden"},{"name":"refresh_token","title":"RefreshToken","type":"string","format":"hidden"},{"name":"last_fetch_started_at","description":"Last time fetched at operation was started","type":"string","format":"hidden"},{"name":"fetch_count","description":"Count of contacts already fetched from Hubspot","type":"number","format":"hidden"},{"name":"is_fetch_completed","type":"boolean","default":false,"format":"hidden"}],"deployment_settings":[],"resources":[],"readme":"readme.md","admin":"/auth/","ui":false,"subscriptions":[{"url":"/notify"}],"schedules":[{"url":"/sync","type":"cron","value":"*/5 * * * *"},{"url":"/monitor/checkToken","type":"cron","value":"*/5 * * * *"}]}},{"url":"https://hull-intercom.herokuapp.com/manifest.json","manifest":{"name":"Intercom","description":"Sync Leads and Users in Intercom with Hull","tags":["outgoing","incoming","batch","oneColumn"],"index":"ship.js","admin":"/auth/","picture":"picture.png","version":"0.7.12","settings":[],"private_settings":[{"name":"synchronized_segments","title":"Segments","description":"Post to Intercom when users match these segments","default":[],"type":"array","format":"segment"},{"name":"access_token","title":"Access Token","type":"string","format":"hidden"},{"name":"webhook_id","title":"Intercom webhook id","type":"string","format":"hidden"},{"name":"last_fetch_started_at","description":"Last time fetched at operation was started","type":"string","format":"hidden"},{"name":"fetch_count","description":"Count of contacts already fetched from Intercom","type":"number","format":"hidden"},{"name":"is_fetch_completed","type":"boolean","default":false,"format":"hidden"},{"name":"send_events_enabled","title":"Enable sending events","description":"Allow sending events to Intercom","type":"boolean","default":false},{"name":"send_events","title":"Events to send","description":"Send following Events to Intercom. Empty sends nothing.","format":"event","type":"array","default":["Entered segment","Left segment"]},{"name":"sync_fields_to_intercom","title":"List of User attributes to push to Intercom","type":"array","format":"table","default":[],"items":{"type":"object","properties":{"hull":{"type":"string","format":"trait","title":"Hull Attribute"},"name":{"type":"string","format":"select","title":"Intercom Attribute","options":{"allowCreate":true,"loadOptions":"/schema/user_fields"}},"overwrite":{"type":"boolean","title":"Hull overwrites Intercom","default":false}},"required":["hull","name"]}},{"name":"sync_fields_to_hull","title":"List of User custom attributes to fetch from Intercom","type":"array","format":"table","default":[],"items":{"type":"object","properties":{"name":{"type":"string","format":"select","title":"Intercom Attributes","options":{"loadOptions":"/schema/user_fields"}},"hull":{"type":"string","format":"trait","title":"Hull Attributes","options":{"allowCreate":true,"source":"intercom"}}},"required":["name","hull"]}}],"deployment_settings":[],"resources":[],"readme":"readme.md","ui":false,"subscriptions":[{"url":"/notify"}],"schedules":[{"url":"/sync","type":"cron","value":"*/5 * * * *"},{"url":"/fetch-leads","type":"cron","value":"*/5 * * * *"}]}},{"url":"https://hull-sql.herokuapp.com/manifest.json","manifest":{"name":"SQL Importer","description":"Import data from your SQL databases","picture":"picture.png","version":"0.2.6","tags":["incoming","oneColumn"],"private_settings":[{"type":"string","format":"title","name":"connector_info","title":"Connector Configuration"},{"name":"enabled","title":"Enable Sync (default interval is 3 hours)","type":"boolean","default":"false"},{"name":"overwrite","title":"Use SQL value in case of data conflict","type":"boolean","default":"true"},{"name":"import_days","title":"Incremental Queries - Start Date (x days ago)","description":"Enter the number of days and the connector will make a variable called 'import_start_date' available to your query that allows you to run incremental queries. If your SQL query does not use this variable at all, this setting has no effect.","type":"number","default":"5"},{"type":"string","format":"title","name":"db_info","title":"Database connection"},{"name":"db_type","type":"string","title":"Type","enum":["redshift","postgres","mysql","mssql"],"default":"postgres","required":true},{"name":"db_host","type":"string","title":"Host Name","required":true,"description":"The public host name of your database server."},{"name":"db_port","type":"string","title":"Port","required":true,"description":"Default ports: MySql: 3306, PostgreSQL: 5432, MS SQL: 1433"},{"name":"db_name","type":"string","title":"Database name","required":true},{"name":"db_options","type":"string","title":"Additional connection options","required":false,"description":"Add connection options for the different database types. See below for more details."},{"name":"db_options_hero","type":"string","headerTemplate":"***MySql and Postgres***<br>Specify options as plain text in the format `ssl=true`.<br><br>***MS SQL***<br>Specify a valid JSON object like `{\"encrypt\": true}`. Please refer to the [tedious driver documentation](http://tediousjs.github.io/tedious/api-connection.html#function_newConnection) for available options.<br>**Important Note for SQL Azure**: SQL Azure requires the option encrypt to be set to true which is not the default. Please specify `{\"encrypt\": true}` in the options otherwise the connection will be refused.","format":"information","title":" "},{"type":"string","format":"title","name":"db_info_login","title":"Database Login"},{"name":"db_login_hero","type":"string","headerTemplate":"***Security Recommendation***<br>We recommend to grant the user below read-only access to dedicated tables to keep your information safe. Please refer to the manual of your database server for additional security recommendations.","format":"information","title":" "},{"name":"db_user","type":"string","title":"Username","required":true},{"name":"db_password","type":"string","title":"Password","required":true},{"name":"query","title":"Query to run","type":"string","format":"hidden"},{"name":"last_sync_at","title":"Last sync","type":"string","format":"hidden"},{"name":"last_updated_at","title":"Last updated_at","type":"string","format":"hidden"},{"name":"last_job_id","title":"Last job ID","type":"string","format":"hidden"}],"resources":[],"readme":"readme.md","admin":"admin.html","ui":false,"schedules":[{"url":"/sync","type":"cron","value":"0 */3 * * *"}]}},{"url":"https://hull-typeform.herokuapp.com/manifest.json","manifest":{"name":"Typeform","description":"Fetch form responses","tags":["incoming","oneColumn"],"picture":"picture.png","admin":"admin","version":"0.2.0","settings":[],"private_settings":[{"name":"api_key","title":"Typeform API key","description":"Click on \"My Account\" and you will find your key at the bottom of the page.","type":"string"},{"name":"typeform_uid","title":"Form","type":"string","format":"select","options":{"allowCreate":false,"loadOptions":"/schema/typeforms"}},{"name":"question_as_email","title":"Select the field matching the user email","description":"You can only pick fields of type email","type":"string","format":"select","options":{"allowCreate":false,"loadOptions":"/schema/questions/email"}},{"name":"sync_answers_to_hull","title":"List of form questions to save into Hull","description":"Date fields should be saved to traits ending with _date suffix","type":"array","format":"table","default":[],"items":{"type":"object","properties":{"question_id":{"type":"string","format":"select","title":"Typeform Question","options":{"allowCreate":true,"loadOptions":"/schema/questions"}},"hull":{"type":"string","format":"trait","title":"Hull Attributes","options":{"allowCreate":true,"source":"typeform"}}},"required":["question_id","hull"]}},{"name":"last_fetch_at","title":"API key","type":"string","format":"hidden"}],"deployment_settings":[],"resources":[],"readme":"readme.md","ui":false,"schedules":[{"url":"/fetch","type":"cron","value":"*/5 * * * *"}]}},{"url":"https://hull-stripe.herokuapp.com/manifest.json","manifest":{"name":"Stripe","description":"Collect Stripe Charges and Subscription events","tags":["incoming","oneColumn"],"picture":"picture.png","admin":"auth","version":"0.1.0","settings":[],"private_settings":[{"name":"id_parameter","title":"Hull user ID which the metadata param would be matched to","type":"string","enum":["external_id","id"],"default":"external_id"},{"name":"metadata_id_parameter","title":"Metadata parameter to match user id","type":"string"}],"deployment_settings":[],"resources":[],"readme":"readme.md","ui":false,"schedules":[],"subscriptions":[{"url":"/notify"}]}},{"url":"https://hull-webhooks.herokuapp.com/manifest.json","manifest":{"name":"Webhooks","description":"Send Hull Users updates as Webhooks","tags":["outgoing","oneColumn","batch"],"picture":"picture.png","version":"0.2.4","private_settings":[{"name":"webhooks_urls","title":"Webhooks URLs","default":["https://example.com.com/webhooks/"],"type":"array","format":"table","items":{"type":"string"}},{"name":"synchronized_segments","title":"Filtered Segments","description":"Global filter. Only send if user matches one of these segments","default":[],"type":"array","format":"segment"},{"name":"webhooks_header","title":"Send conditions","type":"string","format":"title"},{"name":"webhooks_segments","title":"Send User when Segments changes","type":"array","format":"table","default":[{"segment":"","channel":""}],"items":{"type":"object","required":["channel","segment"],"properties":{"segment":{"title":"Segment Name","type":"string","format":"segment"},"entered":{"title":"Send on enter","type":"boolean","format":"checkbox"},"left":{"title":"Send on leave","type":"boolean","format":"checkbox"}}}},{"name":"webhooks_attributes","title":"Send User when attributes change","default":[],"type":"array","format":"trait"},{"name":"webhooks_events","title":"Send User when events performed","default":[],"type":"array","format":"event"}],"deployment_settings":[],"resources":[],"readme":"readme.md","ui":false,"subscriptions":[{"url":"/notify"}]}},{"url":"https://hull-browser.herokuapp.com/manifest.json","manifest":{"name":"Browser Personalization","description":"Get access to whitelisted attributes and segments from the Browser in realtime","picture":"picture.png","index":"ship.js","version":"0.0.3","admin":"/admin.html","tags":["incoming","outgoing","oneColumn"],"settings":[{"name":"script","title":"Code to be run everytime user is updated","type":"string","format":"code","default":"console.log(user, segments)"}],"private_settings":[{"name":"whitelisted_domains","title":"Domains from which access will be allowed","type":"array","format":"table","items":{"type":"string"},"default":["hull.io"]},{"name":"synchronized_segments","title":"Only users from these segments will be sent to the browser","type":"array","format":"segment","items":{"type":"string"},"default":[]},{"name":"public_traits","title":"Traits that will be sent","type":"array","format":"trait","items":{"type":"string"},"default":["domain","email"]},{"name":"public_segments","title":"Segment names that will be sent","type":"array","format":"segment","items":{"type":"string"},"default":[]}],"resources":[],"readme":"readme.md","subscriptions":[{"url":"/notify"}],"ui":false}}]);