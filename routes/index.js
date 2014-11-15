/*jslint node: true */
'use strict';

var app               = global.app,
    express           = global.express,
    googleAnalyticsId = global.nconf.get('GOOGLE_ANALYTICS_ID'),
    ua                = require('universal-analytics'),
    sample            = require('../controllers/sample');

// Heartbeat
app.get('/heartbeat', heartbeat);

// Add google analytics here
if (googleAnalyticsId) {
  app.use(ua.middleware(googleAnalyticsId, {}));
}

// Create routes
app.use('/assets/', express.static(__dirname + '/../assets'));
app.use('/components/', express.static(__dirname + '/../bower_components'));
app.get('/', sample.index);

// 404 if no file or route is found
app.use(fileNotFound);

function heartbeat(req, res) {
  res.status(200).end();
}

function fileNotFound(req, res) {
  res.status(404).render('error/404');
}
