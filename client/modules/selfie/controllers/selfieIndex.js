selfie.controller('selfieIndexController', ['$scope', '$http', 'camCanvas', function($scope, $http, camCanvas){
	
	var selfieVideo = camCanvas.cloneNode(true);
	var selfieWrap = document.getElementById("selfie-wrap");

	selfieVideo.setAttribute('height', '100%');
	selfieVideo.id = 'video';

	selfieWrap.appendChild(selfieVideo);

	selfieVideo.play();

	var selfieCanvas = document.createElement('canvas');
	selfieCanvas.setAttribute('height','480');
	selfieCanvas.setAttribute('width','640');
	selfieContext = selfieCanvas.getContext('2d');

	$scope.butFirstLetMeTakeASelfie = function(){

		selfieContext.drawImage(selfieVideo, 0, 0, 640, 480);
		var image = selfieCanvas.toDataURL();
		selfieVideo.pause();

		console.log(image);
		
		$http.post('http://whatson.dev.opencity.io/selfie', {
			image: image
		}).success(function(data){
			console.log(data);
		});
	}

}]);