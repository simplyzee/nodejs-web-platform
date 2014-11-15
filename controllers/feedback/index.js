/* jslint node: true */
'use strict';

// Preprocess the templates for use by angular
function index(req, res, next) {
    var data = {
        title: 'Your Feedback!'
    };

    res.render('feedback/index', data);
}
function past(req, res, next) {
    var data = {
        title: 'Previous Polls'
    };

    res.render('feedback/past', data);
}
function voted(req, res, next) {
    var data = {
        title: 'Thank you for your vote'
    };

    res.render('feedback/voted', data);
}


module.exports.index = index;
module.exports.past = past;
module.exports.voted = voted;