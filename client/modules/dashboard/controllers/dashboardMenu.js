dashboard.controller('dashboardMenuController', ['$scope', 'camCanvas', function($scope, camCanvas){
	var videoOverlay = document.getElementById("selfie-overlay");

	var selfieButtonCanvas = camCanvas.cloneNode(true);

	selfieButtonCanvas.setAttribute('width', '400%');
	selfieButtonCanvas.setAttribute('height', '400%');
	selfieButtonCanvas.id = 'menuvideo';
	selfieButtonCanvas.setAttribute('class','video');

	videoOverlay.appendChild(selfieButtonCanvas);
	selfieButtonCanvas.play();


}]);