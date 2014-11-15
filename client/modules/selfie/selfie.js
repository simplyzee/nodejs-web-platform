var selfie = angular.module('selfie', ['ngRoute']);

selfie.config(['$routeProvider', function($routeProvider){
    $routeProvider.when('/selfie/', {
        templateUrl: '/modules/selfie/partials/index.html',
        controller: 'selfieIndexController'
    });
}]);
