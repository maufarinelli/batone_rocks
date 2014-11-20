'use strict';

(function(angular) {
    angular.module('bg')
        .directive('bgDirective', function() {
            return {
                restrict: 'E', 
                templateUrl: 'js/Bg/bg_image.html', 
                controller: 'BgController', 
                link: function(scope, element, attrs) {
                    scope.animate = function() {
                        element[0].firstChild.style.webkitTransform = 'translateX('+ scope.windowWidth * 0.7 +'px)';
                        element[0].firstChild.style.MozTransform = 'translateX('+ scope.windowWidth * 0.7 +'px)';
                        /*element[0].style.msTransform = 'translateX('+ scope.windowWidth * (8/10) +'px)';
                        element[0].style.OTransform = 'translateX('+ scope.windowWidth * (8/10) +'px)';
                        element[0].style.transform = 'translateX('+ scope.windowWidth * (8/10) +'px)';*/
                    }

                    scope.animate();
                }
            }
        });
})(angular);