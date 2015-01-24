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
                url: '/#/player',
                text: 'Player',
                id: 'player'
            },
            {
                url: '/#/downloads',
                text: 'Downloads',
                id: 'downloads'
            },
            {
                url: '/#/contato',
                text: 'Contato',
                id: 'contato'
            },
        ];

        $scope.currentMenuItem = '/' + window.location.hash;

        $scope.onMenuItemClick = function(menuItem) {
            $scope.currentMenuItem = menuItem.url;
        };

        $scope.isMenuItemActive = function(menuItem) {
            return $scope.currentMenuItem === menuItem.url;
        };
    }

    angular.module('menu', [])
        .controller('MenuController', MenuController);
})(angular);