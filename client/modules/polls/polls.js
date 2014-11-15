var polls = angular.module('polls', ['ngRoute']);

polls.config(['$routeProvider', function($routeProvider){

    $routeProvider.when('/polls/', {
        templateUrl: '/modules/polls/partials/index.html',
        controller: 'pollsIndexController'
    }).when('/polls/past', {
        templateUrl: '/modules/polls/partials/past.html',
        controller: 'pollsIndexController'
    }).when('/polls/voted', {
        templateUrl: '/modules/polls/partials/voted.html',
        controller: 'pollsIndexController'
    });

}]);
