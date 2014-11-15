dashboard.controller('dashboardIndexController', ['$scope', 'camCanvas', function($scope, camCanvas){
	// Grab elements, create settings, etc.
	var videoOverlay = document.getElementById("video-overlay");

	camCanvas.setAttribute('width', '150%');
	camCanvas.setAttribute('height', '150%');
	camCanvas.id = 'video';

	videoOverlay.appendChild(camCanvas);

	stackBlurCanvasRGBA( camCanvas.id, 0, 0, 400, 400, 50 );
}]);