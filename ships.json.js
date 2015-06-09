window['hull-ships-registry:hull-ships']([{"url":"https://hull-ships.github.io/hull-quiz/manifest.json","manifest":{"name":"Classic Quiz","version":"0.0.1","description":"A Quiz game with scores","index":"ship.html","picture":"picture.png","settings":[{"name":"logo_image","title":"logo image","type":"string","format":"image"},{"name":"logo_max_height","title":"Max height for logo","description":"Maximum height for your logo","type":"number","format":"number","default":150},{"name":"background_image","title":"Background image","type":"string","format":"image"},{"name":"background_image_opacity","title":"Background image opacity","type":"number","format":"range","default":0.8,"maximum":1,"minimum":0,"multipleOf":0.1},{"name":"background_image_blur","title":"Background image blur","type":"number","format":"range","default":0.1,"maximum":10,"minimum":0,"multipleOf":0.1},{"name":"background_color","title":"Background color","type":"string","format":"color","default":"#000000"},{"name":"text_color","title":"text color","type":"string","format":"color","default":"#ffffff"},{"name":"button_background_color","title":"Button background color","type":"string","format":"color","default":"#f39001"},{"name":"button_text_color","title":"Button text color","type":"string","format":"color","default":"#ffffff"},{"name":"display_pagination","title":"Display pagination","description":"Display pagination buttons","type":"boolean","default":false},{"name":"questions_images_max_height","title":"Max height for question images","description":"Maximum height for your questions images (in pixels)","type":"number","format":"number","default":500},{"name":"can_replay","title":"User can play multiple times","description":"Let the user play the quiz multiple times","type":"boolean","default":false},{"name":"sample_questions","title":"Sample Questions","description":"Only display a number of questions picked randomly","type":"number","format":"number","default":0},{"name":"sample_answers","title":"Sample answers","description":"Only display a number of answers picked randomly","type":"number","format":"number","default":0},{"name":"question_countdown","title":"Question countdown","description":"Maximum time to answer a question","type":"number","format":"number","default":0},{"name":"quiz_countdown","title":"Quiz countdown","description":"Maximum time to answer all questions","type":"number","format":"number","default":0},{"name":"sharing","title":"Sharing Options","type":"object","properties":{"url":{"type":"string","format":"uri","title":"Share URL","description":"URL to share"},"facebook":{"type":"object","title":"Facebook","properties":{"display":{"type":"boolean","default":true,"title":"Display Facebook share button"},"button_text":{"type":"string","default":"Share on Facebook","title":"Button Text"}}},"twitter":{"type":"object","title":"Twitter","properties":{"display":{"type":"boolean","default":true,"title":"Display Twitter share button"},"button_text":{"type":"string","default":"Share on Twitter","title":"Button text"},"text":{"type":"string","title":"Default tweet","maxLength":118},"hashtags":{"type":"string","title":"Hashtags","description":"Allow easy discovery of Tweets by topic by including a comma-separated list of hashtag values without the preceding # character."},"via":{"type":"string","title":"Via","description":"A Twitter username to associate with the Tweet, such as your site’s Twitter account. The provided username will be appended to the end of the Tweet with the text 'via @username'."}}}}}],"resources":[{"name":"quiz","type":"quiz"},{"name":"form","type":"form"}],"locales":["en"]}},{"url":"https://hull-ships.github.io/hull-comments/manifest.json","manifest":{"name":"Classic Comments","description":"A clean comments widget, with Social login, likes and upvotes","picture":"picture.png","index":"ship.html","version":"0.0.2","locales":["en"],"settings":[{"name":"allow_guest","title":"Allow Guest","description":"Allow guest user to post comments.","type":"boolean","default":false},{"name":"redirect_url","title":"Redirect URL","description":"Where to redirect when login has succeeded.","type":"string"},{"name":"background_color","title":"Background Color","default":"#ffffff","type":"string","format":"color"},{"name":"text_color","title":"Main Text Color","default":"#3f4549","type":"string","format":"color"},{"name":"light_color","title":"Secondary Text Color","default":"#7f929c","type":"string","format":"color"},{"name":"link_color","title":"Link Color","default":"#288ce4","type":"string","format":"color"}]}},{"url":"https://hull-ships.github.io/hull-ship-boilerplate/manifest.json","manifest":{"name":"Hull Ship Boilerplate","description":"Hull Ship Boilerplate","picture":"picture.png","index":"ship.html","version":"0.0.2","locales":["en"],"settings":[],"resources":[]}},{"url":"https://hull-ships.github.io/hull-login/manifest.json","manifest":{"name":"Hull Login","description":"A simple login overlay","picture":"picture.png","version":"0.0.1","index":"ship.html","locales":["en"],"deployment_settings":[{"name":"redirect_url","title":"Redirect URL","description":"Where to redirect when login has succeeded.","type":"string"}],"settings":[{"name":"logo_image","title":"logo image","type":"string","format":"image"},{"name":"primary_color","title":"Primary color","type":"string","format":"color","default":"#fa5400"},{"name":"text_color","title":"Text color","type":"string","format":"color","default":"#aaaaaa"},{"name":"link_color","title":"Link color","type":"string","format":"color","default":"#aaaaaa"},{"name":"button_border_radius","title":"Button border radius","type":"number","format":"range","default":3,"minimum":0,"maximun":100},{"name":"overlay_border_radius","title":"Overlay border radius","type":"number","format":"range","default":6,"minimum":0,"maximun":100},{"name":"show_classic_login","title":"Show classic login form","type":"boolean","default":true},{"name":"show_sign_up_section_after","title":"Show sign up section","type":"number","minimum":0,"default":2000},{"name":"hide_thanks_section_after","title":"Hide thanks section","type":"number","minimum":0,"default":2000}],"resources":[{"name":"profile_form","type":"form"}]}},{"url":"https://hull-ships.github.io/hull-sharing-buttons/manifest.json","manifest":{"name":"Sharing Buttons","description":"A set of social sharing buttons","picture":"picture.png","index":"ship.html","version":"0.0.1","settings":[{"name":"sharing_buttons","title":"Sharing Buttons","type":"object","properties":{"facebook":{"title":"Facebook","type":"boolean","default":true},"twitter":{"title":"Twitter","type":"boolean","default":true},"google":{"title":"Google","type":"boolean","default":true},"email":{"title":"Email","type":"boolean","default":true},"linkedin":{"title":"Linkedin","type":"boolean","default":true},"whatsapp":{"title":"Whatsapp (visible on mobile only)","type":"boolean","default":true}}},{"name":"appearance","title":"Appearance","type":"object","properties":{"show_labels":{"title":"Show Labels","description":"Show text labels next to icon","type":"boolean","default":true},"layout":{"title":"Layout","description":"","type":"string","enum":["vertical","horizontal"],"enum_titles":["Vertical","Horizontal"],"default":"horizontal"},"button_shape":{"title":"Button Shape","description":"","type":"string","enum":["circle","rounded","square"],"enum_titles":["Circle","Rounded","Square"],"default":"square"}}}]}},{"url":"https://hull-ships.github.io/hull-comments-count/manifest.json","manifest":{"name":"Hull Comments Count","description":"A simple comments counter","picture":"picture.png","index":"ship.html","version":"0.0.1","locales":["en"]}},{"url":"https://hull-ships.github.io/hull-tracking/manifest.json","manifest":{"name":"Tracking Ship","description":"A super small ship to add Click Tracking with user-defined selectors","picture":"picture.png","index":"ship.js","version":"0.0.1","locales":["en"],"settings":[{"name":"tracked_links","title":"Tracked links","type":"array","format":"table","items":{"type":"object","properties":{"selector":{"type":"string","title":"DOM Selector"},"event_name":{"type":"string","title":"Event Name"}}},"default":[{"selector":"a[target]","event_name":"Click Link to external web page"}]}],"resources":[]}},{"url":"https://hull-ships.github.io/hull-landing-page/manifest.json","manifest":{"name":"Landing Page Ship","description":"Displays a landing page with customizable Background, content, call to action and a row of Images","picture":"picture.png","index":"ship.html","version":"0.0.2","deployment_settings":[{"name":"_selector","default":"body","type":"string","format":"string"},{"name":"_placement","default":"append","type":"string","format":"string"}],"settings":[{"name":"cta_link","title":"Call to action link","format":"string","type":"string"},{"name":"logo","title":"Background Image","format":"image","type":"string"},{"name":"background_image","title":"Background Image","format":"image","type":"string"},{"name":"background_color","title":"Background Color","format":"color","default":"#0173E3","type":"string"},{"name":"link_color","title":"Link Color","format":"color","default":"#FFFFFF","type":"string"},{"name":"button_border_radius","title":"Button Radius","format":"range","maximum":100,"minimum":0,"default":0,"multipleOf":1,"type":"number"},{"name":"button_background_color","title":"Button Color","format":"color","default":"#2C4159","type":"string"},{"name":"button_text_color","title":"Button Text Color","format":"color","default":"#FFFFFF","type":"string"},{"name":"text_color","title":"Text color","format":"color","default":"#FFFFFF","type":"string"},{"name":"title_color","title":"Title color","format":"color","default":"#FFFFFF","type":"string"},{"name":"background_blur","title":"Background Blur","format":"range","maximum":50,"minimum":0,"default":0,"multipleOf":1,"type":"number"},{"name":"background_opacity","title":"Background opacity","format":"range","maximum":1,"minimum":0,"default":0,"multipleOf":0.1,"type":"number"},{"name":"images","title":"Content Images","type":"array","format":"table","items":{"format":"image","type":"string"}}],"resources":[],"locales":["en"]}},{"url":"https://hull-ships.github.io/hull-share-selection/manifest.json","manifest":{"name":"Share Selection","description":"Shows a floating share popup when selecting text content","picture":"picture.png","index":"ship.html","version":"0.0.1","locales":["en"],"deployment_settings":[{"name":"_selector","default":"body","type":"string","format":"string"},{"name":"_placement","default":"append","type":"string","format":"string"}],"settings":[{"name":"selector","title":"Popover target","description":"A CSS selector that defines which elements will show a popopver when selected","default":"p, blockquote","type":"string","format":"textarea"},{"name":"popover_color","title":"Popover Color","default":"#363C3F","type":"string","format":"color"},{"name":"button_color","title":"Button Color","default":"#fff","type":"string","format":"color"},{"name":"margin","title":"Buttons size","type":"number","format":"range","default":10,"maximum":30,"minimum":5,"multipleOf":1}],"resources":[]}},{"url":"https://hull-ships.github.io/hull-olark/manifest.json","manifest":{"name":"Olark","description":"Install Olark in your site","picture":"picture.png","index":"ship.js","version":"0.0.1","locales":["en"],"deployment_settings":[{"name":"_selector","default":"body","type":"string","format":"string"},{"name":"_placement","default":"append","type":"string","format":"string"}],"settings":[{"name":"site_id","title":"Olark Site ID","description":"Olark Code, found in Settings > Installation","type":"string","format":"text"}],"resources":[]}}]);