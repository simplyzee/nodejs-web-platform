dashboard.controller('dashboardIndexController', ['$scope', 'camCanvas', function($scope, camCanvas){
	// Grab elements, create settings, etc.
	var videoOverlay = document.getElementById("video-overlay");

	backgroundCanvas = camCanvas.cloneNode(true);
	backgroundCanvas.setAttribute('width', '150%');
	backgroundCanvas.setAttribute('height', '150%');
	backgroundCanvas.setAttribute('class','video');

	videoOverlay.appendChild(backgroundCanvas);
	backgroundCanvas.play();
}]);