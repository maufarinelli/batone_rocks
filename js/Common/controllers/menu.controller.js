'use strict';

(function(angular) {
    function MenuController($scope) {
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

        $scope.currentMenuItem = $scope.menuItems[0].id;

        $scope.onMenuItemClick = function(menuItem) {
            $scope.currentMenuItem = menuItem.id;
        };

        $scope.isMenuItemActive = function(menuItem) {
            return $scope.currentMenuItem === menuItem.id;
        };
    }

    angular.module('menu', [])
        .controller('MenuController', MenuController);
})(angular);