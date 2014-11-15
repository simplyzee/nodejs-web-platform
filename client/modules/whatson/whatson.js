var whatson = angular.module('whatson', ['ngRoute']);

whatson.config(['$routeProvider', function($routeProvider){

	$routeProvider.when('/', {
		templateUrl: '/modules/whatson/partials/index.html',
		controller: 'whatsonIndexController'
	});

}]);