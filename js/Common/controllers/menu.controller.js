'use strict';

(function(angular) {
    function MenuController($scope) {
        var _self = this;

        $scope.menuItems = [
            {
                url: '/#/home',
                text: 'Batone',
                id: 'home'
            },
            {
                url: '/#/videos',
                text: 'Videos',
                id: 'videos',
            },
            {
                url: '/#/downloads',
                text: 'Downloads',
                id: 'downloads'
            },
            {
                url: '/#/eu',
                text: 'Eu',
                id: 'eu'
            },
            {
                url: '/#/contato',
                text: 'Contato',
                id: 'contato'
            },
        ];
        $scope.isMenuToggleOpened = false;

        $scope.currentMenuItem = '/' + window.location.hash;

        $scope.onMenuItemClick = function(menuItem) {
            $scope.currentMenuItem = menuItem.url;
        };

        $scope.isMenuItemActive = function(menuItem) {
            return $scope.currentMenuItem === menuItem.url;
        };

        $scope.onMenuToggle = function() {
            $scope.isMenuToggleOpened = !$scope.isMenuToggleOpened;
        }
    }

    angular.module('menu', [])
        .controller('MenuController', MenuController);
})(angular);