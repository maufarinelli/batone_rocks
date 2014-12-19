'use strict';

(function(angular, _){
	var videos = angular.module('videos');

	videos.directive('videosDirective', [function () {
		return {
			restrict: 'E',
			templateUrl: 'templates/videos-container.html',
			link: function ($scope, element, attrs) {
				var videoList = element[0].querySelectorAll('.video'),
					videoClass = 'video-';

				var randomPos = function() {
					var randomList = [];
					while(randomList.length !== 7) {
						var n = Math.ceil(Math.random() * 10);

						if(!_.contains(randomList, n)) {
							randomList.push(n);
						}
					}

					_.each(videoList, function(video, index) {
						video.setAttribute('class', 'video ' + videoClass + randomList[index]);
					});
				};

				randomPos();
			}
		};
	}]);
})(angular, _);