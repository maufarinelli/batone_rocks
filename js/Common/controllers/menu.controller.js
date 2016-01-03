'use strict';

(function(angular) {
    function MenuController($scope, $translate, $timeout, enText, frText, ptText) {
        var _self = this,
            menu;

        var traslatedTexts = {
            en: enText, 
            fr: frText, 
            pt: ptText
        };
        $scope.traslatedText = traslatedTexts.en;

        $scope.$watch('currentLanguage', function(o, n) {
            $scope.menuItems = [
                {
                    url: '/#/home',
                    text: 'Batone',
                    id: 'home'
                },
                {
                    url: '/#/videos',
                    text: $scope.traslatedText['menu.videos'],
                    id: 'videos',
                },
                {
                    url: '/#/downloads',
                    text: 'Downloads',
                    id: 'downloads'
                },
                {
                    url: '/#/eu',
                    text: $scope.traslatedText['menu.eu'],
                    id: 'eu'
                }
            ];
        });

        $scope.isMenuToggleOpened = false;

        $scope.currentMenuItem = '/' + window.location.hash;
        $scope.currentLanguage = 'en';

        $scope.changeLanguage = function(key) {
            $translate.use(key);
            $scope.currentLanguage = key;
            $scope.traslatedText = traslatedTexts[key];
        };

        $scope.onMenuItemClick = function(menuItem) {
            $scope.currentMenuItem = menuItem.url;
            if(menuItem.id !== 'home') {
                $scope.onMenuToggle();
            }
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