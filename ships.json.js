window['hull-ships-registry:hull-ships']([{"url":"https://hull-ships.github.io/instant/manifest.json","manifest":{"name":"instant","version":"0.1.0","description":"A Wonderful instant win and signup experience for your users","index":"index.liquid.html","settings":[{"name":"images","title":"Images","description":"Change your images here !","type":"object","properties":{"brand":{"title":"Brand image","description":"Dimensions must be 72px x 40px","type":"string","format":"image"},"header":{"title":"Header image","description":"Dimensions must be 810px x 230px","type":"string","format":"image"},"background":{"title":"Background image","description":"Dimensions must be 810px x 668px","type":"string","format":"image"}},"additionalProperties":false},{"name":"social_links","title":"Social Links","type":"array","format":"table","default":[{"name":"Facebook","url":""},{"name":"Twitter","url":""}],"items":{"type":"object","properties":{"name":{"type":"string"},"url":{"type":"string","format":"uri"}},"required":["name","url"]}},{"name":"footer_links","title":"Footer Links","type":"array","format":"table","default":[{"name":"A Link here 1","url":"/"},{"name":"A Link here 2","url":"/"}],"items":{"type":"object","properties":{"name":{"type":"string"},"url":{"type":"string","format":"uri"}},"required":["name","url"]}}],"resources":[{"name":"achievement","type":"instant_win"},{"name":"form","type":"form"}],"locales":["en"]}},{"url":"https://hull-ships.github.io/quiz/manifest.json","manifest":{"name":"quiz","version":"0.0.1","description":"A Wonderful quiz for your users","index":"index.liquid.html","settings":[{"name":"logo_image","title":"logo image","type":"string","format":"image"},{"name":"background_image","title":"Background image","type":"string","format":"image"},{"name":"background_image_opacity","title":"Background image opacity","type":"string","default":".8"},{"name":"background_image_blur","title":"Background image blur","type":"string","default":"1"},{"name":"background_color","title":"Background color","type":"string","format":"color","default":"#000000"},{"name":"text_color","title":"text color","type":"string","format":"color","default":"#ffffff"},{"name":"button_background_color","title":"Button background color","type":"string","format":"color","default":"#f39001"},{"name":"button_text_color","title":"Button text color","type":"string","format":"color","default":"#ffffff"},{"name":"auto_start","title":"Auto Start","description":"Automatically start the quiz when it's loaded","type":"boolean","default":false},{"name":"display_pagination","title":"Display pagination","description":"Display pagination buttons","type":"boolean","default":true},{"name":"shuffle_answers","title":"Shuffle answers","description":"Shuffle the order of display for answers","type":"boolean","default":true},{"name":"sample_questions","title":"Sample Questions","description":"Only display a number of questions picked randomly","type":"number","format":"number","default":0},{"name":"question_timer","title":"Question timer","description":"Maximum time to answer a question","type":"number","format":"number","default":0},{"name":"quiz_timer","title":"Quiz timer","description":"Maximum time to answer all questions","type":"number","format":"number","default":0}],"resources":[{"name":"quiz","type":"quiz"},{"name":"profile-form","type":"form"}],"locales":["en"],"definitions":{}}},{"url":"https://hull-ships.github.io/starter/manifest.json","manifest":{"name":"hull-ship-starter","version":"0.0.0","description":"A Very minimal Ship for hull.io","index":"index.liquid.html","settings":[{"name":"background_color","type":"string","title":"Background Color","format":"color","default":"#ffffff"},{"name":"text_color","type":"string","title":"Text Color","format":"color","default":"#ff0000"},{"name":"brand_image","type":"string","title":"Brand Image","format":"image"}],"resources":[{"name":"form","type":"form"}],"locales":["en"]}}]);