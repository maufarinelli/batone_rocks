'use strict';

(function(angular) {

    function PlayerController() {
        /*var iframePlayer = document.querySelector('.iframe');
        var soundcloudWidget = SC.Widget(iframePlayer);
        
        console.log(SC.Widget.Events.READY);*/
        //var iframeElement   = document.querySelector('iframe');
		//var iframeElementID = iframeElement.id;
    }

    angular.module('player', [])
        .controller('PlayerController', PlayerController);

})(angular);