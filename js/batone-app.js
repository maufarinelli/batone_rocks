'use strict';

(function(angular) {
    angular.module('batoneApp', [
        'ngRoute',
        'ngAnimate',
        'pascalprecht.translate', 
        'i18n',
        'menu',
        'player',
        'videos',
        'downloads',
        'eu',
        'bg'
    ])
    .config(function($translateProvider, enTextProvider, frTextProvider, ptTextProvider) {
            $translateProvider.translations('en', enTextProvider.$get());
            $translateProvider.translations('fr', frTextProvider.$get());
            $translateProvider.translations('pt', ptTextProvider.$get());
            $translateProvider.preferredLanguage('en');
        })
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/home', {
            templateUrl: 'templates/player.html',
            controller: 'PlayerController'
        });
        $routeProvider.when('/videos', {
            templateUrl: 'templates/videos.html',
            controller: 'VideosController'
        });
        $routeProvider.when('/eu', {
            templateUrl: 'templates/eu.html',
            controller: 'EuController'
        });
        $routeProvider.when('/downloads', {
            templateUrl: 'templates/downloads.html',
            controller: 'DownloadsController'
        });
        $routeProvider.otherwise({
            redirectTo: '/home'
        });
    }]);
})(angular);