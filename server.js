/*jslint node: true*/
'use strict';

if (process.env.NODE_ENV === 'production') {
  var newrelic = require('newrelic');
}

var nconf        = require('nconf'),
    memwatch     = require('memwatch'),
    environment  = process.env.NODE_ENV || 'development',
    express      = require('express'),
    app          = global.app = express(),
    gaikan       = require('gaikan');

require('colors');

if (process.env.NODE_ENV === 'production') {
  global.newrelic = newrelic;
}

// Add memwatch
memwatch.on('leak', function(info) {
  console.log('memwatch - leak'.bold.red);
  console.log(info);
});

memwatch.on('stats', function(stats) {
  console.log('memwatch - stats'.bold.blue);
  console.log(stats);
});

// Load configuration data
nconf
  .argv()
  .env()
  .file('local', 'config/local.json')
  .file('user', 'config/' + environment + '.json')
  .file('global', 'config/global.json')
  .file('package', 'package.json');

// Export modules declared before app
global.nconf = nconf;
global.express = express;

// Set templating engine
app.set('view engine', '.html');
app.engine('html', gaikan);

// gaikan.options.layout = 'layout';
gaikan.options.enableCache = false;
gaikan.options.enableCompression = false;

// Determine IP Address through proxy
app.enable('trust proxy');

// Setup routes
require('./routes');

// Start server
var server = app.listen(nconf.get('PORT'), function() {
    console.log('Server running on port %d'.bold.green, server.address().port);
});

module.exports.server = server;
