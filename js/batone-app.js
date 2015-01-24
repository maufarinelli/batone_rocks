'use strict';

(function(angular) {
    angular.module('batoneApp', [
        'ngRoute',
        'menu',
        'player',
        'videos',
        'downloads',
        'contact',
        'bg'
    ])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/home', {
            templateUrl: 'templates/player.html',
            controller: 'PlayerController'
        });
        $routeProvider.when('/videos', {
            templateUrl: 'templates/videos.html',
            controller: 'VideosController'
        });
        $routeProvider.when('/player', {
            templateUrl: 'templates/player.html',
            controller: 'PlayerController'
        });
        $routeProvider.when('/downloads', {
            templateUrl: 'templates/downloads.html',
            controller: 'DownloadsController'
        });
        $routeProvider.when('/contato', {
            templateUrl: '../templates/contato.html',
            controller: 'ContactController'
        });
        $routeProvider.otherwise({
            redirectTo: '/home'
        });
    }]);
})(angular);