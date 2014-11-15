/*jslint node: true */
'use strict';

var app               = global.app,
    express           = global.express,
    googleAnalyticsId = global.nconf.get('GOOGLE_ANALYTICS_ID'),
    ua                = require('universal-analytics'),
    sample            = require('../controllers/sample'),
    dashboard         = require('../controllers/dashboard');

// Heartbeat
app.get('/heartbeat', heartbeat);

// Add google analytics here
if (googleAnalyticsId) {
  app.use(ua.middleware(googleAnalyticsId, {}));
}

// Create routes

// API Routes to be placed below
app.get('/api/sample', sample.index);

// Assets and Components
app.use( express.static(__dirname + '/../client'));
app.use('/components/', express.static(__dirname + '/../bower_components'));

// Angular Application
app.get('/', function(req, res){
	res.render('client/app');
});

// 404 if no file or route is found
app.use(fileNotFound);

function heartbeat(req, res) {
  res.status(200).end();
}

function fileNotFound(req, res) {
  res.status(404).render('error/404');
}
