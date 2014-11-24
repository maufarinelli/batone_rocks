'use strict';

(function(angular) {
    angular.module('batoneApp', [
        'ngRoute',
        'bg',
        'player'
    ])
    .config(['$routeProvider', function($routeProvider) {
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
            templateUrl: 'templates/contato.html',
            controller: 'ContatoController'
        });
        $routeProvider.otherwise({
            redirectTo: '/player'
        });
    }]);
})(angular);