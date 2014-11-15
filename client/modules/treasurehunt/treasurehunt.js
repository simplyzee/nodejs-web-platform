var treasurehunt = angular.module('treasurehunt', ['ngRoute']);

treasurehunt.config(['$routeProvider', function($routeProvider){
    $routeProvider.when('/treasurehunt/', {
        templateUrl: '/modules/treasurehunt/partials/index.html',
        controller: 'treasurehuntIndexController'
    });
}]);
