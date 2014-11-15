var feedback = angular.module('feedback', ['ngRoute']);

feedback.config(['$routeProvider', function($routeProvider){

	$routeProvider.when('/feedback', {
		templateUrl: '/modules/feedback/partials/index.html',
		controller: 'feedbackIndexController'
	});

}]);