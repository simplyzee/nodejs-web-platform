var dashboard = angular.module('dashboard', ['ngRoute']);

dashboard.config(['$routeProvider', function($routeProvider){

	$routeProvider.when('/', {
		templateUrl: '/modules/dashboard/partials/index.html',
		controller: 'dashboardIndexController'
	}).when('/menu', {
		templateUrl: '/modules/dashboard/partials/menu.html',
		controller: 'dashboardMenuController'
	});

}]);