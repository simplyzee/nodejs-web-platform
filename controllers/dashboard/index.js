/* jslint node: true */
'use strict';

// Preprocess the templates for use by angular
function index(req, res, next) {

  var data = {};

  res.render('dashboard/index', data);
}

module.exports.index = index;