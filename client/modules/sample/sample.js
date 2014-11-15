var sample = angular.module('sample', ['ngRoute']);

sample.config(['$routeProvider', function($routeProvider){

	$routeProvider.when('/sample/', {
		templateUrl: '/modules/sample/partials/index.html',
		controller: 'sampleIndexController'
	});

}]);