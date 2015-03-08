'use strict';

(function(angular) {
    angular.module('menu')
        .directive('mainMenu', function() {
            return {
                restrict: 'E',
                templateUrl: 'templates/menu.html'
            }            
        });
})(angular);