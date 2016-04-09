'use strict';

(function(angular) {
    angular.module('menu')
        .directive('mainMenu', function($timeout) {
            return {
                restrict: 'E',
                templateUrl: 'templates/menu.html',
                controller: 'MenuController',
                controllerAs: 'menuCtrl',
                link: function(scope, element) {
                    var menuMobileList = element[0].querySelector('.menu-mobile-list');

                    $timeout(function() {
                        angular.element(menuMobileList).removeClass('is-hidden');
                    });
                }
            }            
        });
})(angular);