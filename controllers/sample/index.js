/* jslint node: true */
'use strict';

// Preprocess the templates for use by angular
function index(req, res, next) {
  var data = {
    title: 'Hello, World!'
  };

  res.render('sample/index', data);
}

module.exports.index = index;
