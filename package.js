Package.describe({
  name: 'vjau:mongo-extend',
  version: '0.0.2',
  summary: 'Adds a method to client collections allowing to update docs by passing an object instead of fields.',
  git: 'https://github.com/vjau/meteor-mongo-extend',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.use('mongo','client');
  api.use('underscore','client');
  api.use('vjau:jsdiff2mongo@1.0.3','client');
  api.addFiles('mongo-extend.js','client');

});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('vjau:mongo-extend');
  api.use('mongo');
  api.addFiles('mongo-extend-tests.js','client');
});
