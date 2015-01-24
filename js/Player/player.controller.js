'use strict';

(function(angular) {

    function PlayerController($scope) {
        $scope.isHomePage = localStorage.isHomePage ? false : true;
    }

    angular.module('player', [])
        .controller('PlayerController', PlayerController);

})(angular);