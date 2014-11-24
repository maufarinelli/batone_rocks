'use strict';

(function(angular) {

    function BgController() {
        this.init();
        //setTimeout(this.animate, 4000);
    }

    BgController.prototype.init = function() {
        setTimeout(this.animate, 3500);
    }

    BgController.prototype.animate = function() {
        var windowWidth = window.innerWidth,
            batonePhotoWidth = 1080,
            toMove = windowWidth - ((windowWidth - batonePhotoWidth) / 2) - batonePhotoWidth/2;

        document.getElementById('bg-photo').style.webkitTransform = 'translateX('+ toMove +'px)';
        document.getElementById('bg-photo').style.MozTransform = 'translateX('+ toMove +'px)';
        document.getElementById('bg-photo').style.msTransform = 'translateX('+ toMove +'px)';
        document.getElementById('bg-photo').style.OTransform = 'translateX('+ toMove +'px)';
        document.getElementById('bg-photo').style.transform = 'translateX('+ toMove +'px)';
    };

    angular.module('bg', [])
        .controller('BgController', BgController);

})(angular);