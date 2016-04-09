'use strict';

(function(angular) {
    function MenuController($scope, $translate, enText, frText, ptText) {
        var self = this,
            menu;

        var traslatedTexts = {
            en: enText, 
            fr: frText, 
            pt: ptText
        };
        $scope.traslatedText = traslatedTexts.en;

        $scope.$watch('menuCtrl.currentLanguage', function(o, n) {
            self.menuItems = [
                {
                    url: '/#/home',
                    text: 'Batone',
                    id: 'home'
                },
                {
                    url: 'http://www.batone.bandcamp.com',
                    text: $scope.traslatedText['menu.albums'],
                    id: 'albums'
                },
                {
                    url: '/#/videos',
                    text: $scope.traslatedText['menu.videos'],
                    id: 'videos'
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

        self.isMenuToggleOpened = false;

        self.currentMenuItem = '/' + window.location.hash;
        self.currentLanguage = 'en';

        self.changeLanguage = function(key) {
            $translate.use(key);
            self.currentLanguage = key;
            $scope.traslatedText = traslatedTexts[key];
        };

        self.onMenuItemClick = function(menuItem) {
            self.currentMenuItem = menuItem.url;
            if(menuItem.id !== 'home') {
                self.onMenuToggle();
            }
        };

        self.isMenuItemActive = function(menuItem) {
            return self.currentMenuItem === menuItem.url;
        };

        self.onMenuToggle = function() {
            self.isMenuToggleOpened = !self.isMenuToggleOpened;
        }
    }

    angular.module('menu', [])
        .controller('MenuController', MenuController);
})(angular);