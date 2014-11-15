app.factory('camCanvas', [function(){
	// Grab elements, create settings, etc.
	var video = document.createElement("video"),
		videoObj = { "video": true },
		errBack = function(error) {
			console.log("Video capture error: ", error.code); 
		};

	video.setAttribute('autoplay', '');

	// Put video listeners into place
	if(navigator.getUserMedia) { // Standard
		navigator.getUserMedia(videoObj, function(stream) {
			video.src = stream;
			video.play();
		}, errBack);
	} else if(navigator.webkitGetUserMedia) { // WebKit-prefixed
		navigator.webkitGetUserMedia(videoObj, function(stream){
			video.src = window.webkitURL.createObjectURL(stream);
			video.play();
		}, errBack);
	}
	else if(navigator.mozGetUserMedia) { // Firefox-prefixed
		navigator.mozGetUserMedia(videoObj, function(stream){
			video.src = window.URL.createObjectURL(stream);
			video.play();
		}, errBack);
	}

	return video;
}]);