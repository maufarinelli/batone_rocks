'use strict';

(function(angular) {

    function PlayerController($scope) {
        $scope.newVisitor = localStorage.newVisitor ? false : true;
    }

    angular.module('player', [])
        .controller('PlayerController', PlayerController);

})(angular);