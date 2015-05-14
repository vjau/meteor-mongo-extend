Package.describe({
  name: 'vjau:mongo-extend',
  version: '0.0.1',
  summary: 'Adds a method to client collections allowing to update docs by passing an object instead of fields.',
  git: 'https://github.com/vjau/meteor-mongo-extend',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.use('mongo','client');
  api.use('vjau:jsdiff2mongo@1.0.1','client');
  api.addFiles('mongo-extend.js','client');

});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('vjau:mongo-extend');
  api.addFiles('mongo-extend-tests.js','client');
});
