var dashboard = angular.module('dashboard', ['ngRoute']);

dashboard.config(['$routeProvider', function($routeProvider){

	$routeProvider.when('/', {
		templateUrl: '/modules/dashboard/partials/index.html',
		controller: 'dashboardIndexController'
	});

}]);