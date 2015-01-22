'use strict';

(function(angular, _){
	var videos = angular.module('videos');

	videos.directive('videosDirective', ['commonServices', function (commonServices) {
		return {
			restrict: 'E',
			templateUrl: 'templates/videos-container.html',
			link: function ($scope, element, attrs) {
				var videoList = element[0].querySelectorAll('.video'),
					linkVideo = element[0].querySelectorAll('.fancybox-media'),
					videoClass = 'video-',
					randomList = commonServices.randomPos(7);

				_.each(videoList, function(video, index) {
					video.setAttribute('class', 'video ' + videoClass + randomList[index]);
				});

				$(linkVideo).fancybox({
					openEffect  : 'none',
					closeEffect : 'none'
				});
			}
		};
	}]);
})(angular, _);