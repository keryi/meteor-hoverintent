Package.describe({
  name: 'meteor-hoverintent',
  version: '1.0.0',
  summary: "Similar to jQuery's hover but it waits until user's mouse slows down enough before calling the handlerIn function",
  git: 'https://github.com/keryi/meteor-hoverintent.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.3.2');
  api.use('jquery');
  api.addFiles('lib/jquery-hoverIntent/jquery.hoverIntent.js', 'client');
});