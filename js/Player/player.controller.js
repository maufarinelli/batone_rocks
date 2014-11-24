'use strict';

(function(angular) {

    function PlayerController() {
        SC.Widget( angular.element('iframe'));
    }

    angular.module('player', [])
        .controller('PlayerController', PlayerController);

})(angular);