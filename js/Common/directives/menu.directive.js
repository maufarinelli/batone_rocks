'use strict';

(function(angular) {
    angular.module('menu')
        .directive('menu', function() {
            restrict: 'E',
            templateUrl: 'templates/menu.html'
        });
})(angular);