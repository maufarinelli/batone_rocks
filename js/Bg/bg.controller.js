'use strict';

(function(angular) {

    function BgController($scope) {
        $scope.windowWidth = window.innerWidth;
    }

    angular.module('bg', [])
        .controller('BgController', ['$scope', BgController]);


})(angular);