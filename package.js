Package.describe({
  name: 'vjau:mongo-extend',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.use('mongo','client');
  api.use('vjau:jsdiff2mongo','client');
  api.addFiles('mongo-extend.js','client');

});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('vjau:mongo-extend');
  api.addFiles('mongo-extend-tests.js','client');
});
