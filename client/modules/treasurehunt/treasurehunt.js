var treasurehunt = angular.module('treasurehunt', ['ngRoute','monospaced.qrcode']);

treasurehunt.config(['$routeProvider', function($routeProvider){
    $routeProvider.when('/treasurehunt/', {
        templateUrl: '/modules/treasurehunt/partials/index.html',
        controller: 'treasurehuntIndexController'
    }).when('/treasurehunt/start', {
        templateUrl: '/modules/treasurehunt/partials/start.html',
        controller: 'treasurehuntStartController'
    }).when('/treasurehunt/:id/complete', {
        templateUrl: '/modules/treasurehunt/partials/complete.html',
        controller: 'treasurehuntCompleteController'
    });
}]);
