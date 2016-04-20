Package.describe({
  name: 'seabrus:modal-alert-confirm',
  version: '0.0.1',
  summary: 'Bootstrap-based modal versions of alert() and confirm() functions',
  git: 'https://github.com/seabrus/modal-alert-confirm.git',
  documentation: 'README.md'
});

Package.onUse(function (api) {
  api.versionsFrom('1.3.1');
  api.use([
    'ecmascript',
    'reactive-var',
    'tracker',
    'jquery',
    'blaze-html-templates',
  ], 'client');
  api.use('twbs:bootstrap@3.3.6', 'client');

  api.addFiles('modal-alert-confirm/template.html', 'client');
  api.addFiles('modal-alert-confirm/style.css', 'client');
  api.mainModule('modal-alert-confirm/js-code.js', 'client');
});

Package.onTest(function (api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('seabrus:modal-alert-confirm');
  api.mainModule('tests/modal-alert-confirm-tests.js', 'client');
});

