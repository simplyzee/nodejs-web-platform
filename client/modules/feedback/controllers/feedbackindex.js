feedback.controller('feedbackIndexController', ['$scope', '$http', function($scope, $http){
	$scope.userfeed = "";

	$scope.enterarea =  function () {
		keyb_change();
		
	}

	$scope.caretpositions = function () {
		getCaretPositions(this);
	}

	$scope.submit = function() {
		 $http.post('http://whatson.dev.opencity.io/feedback/', 'text=' + $scope.userfeed)
		 	.success(function(data) {
    			$scope.userfeed = data;
			});
	}
}]);