'use strict';

(function(angular) {
    var _self;

    function BgController($scope, $rootScope) {
        var windowWidth = window.innerWidth,
            batonePhotoWidth = 1080;

        _self = this;
        this.toMove = windowWidth - 40 - ((windowWidth - batonePhotoWidth) / 2) - batonePhotoWidth/2;

        if(this.isHome()) {
            localStorage.removeItem('isHomePage');
        }
        $scope.isHomePage = localStorage.isHomePage ? false : true;
        
        // Animates if it is the homepage
        if($scope.isHomePage) { 
            this.animate();
        }
        else {
            this.posRight();
        }
    }

    BgController.prototype.animate = function() {
        setTimeout(this.posRight, 3500);
    };

    BgController.prototype.posRight = function() {
        document.getElementById('bg-photo').style.webkitTransform = 'translateX('+ _self.toMove +'px)';
        document.getElementById('bg-photo').style.MozTransform = 'translateX('+ _self.toMove +'px)';
        document.getElementById('bg-photo').style.msTransform = 'translateX('+ _self.toMove +'px)';
        document.getElementById('bg-photo').style.OTransform = 'translateX('+ _self.toMove +'px)';
        document.getElementById('bg-photo').style.transform = 'translateX('+ _self.toMove +'px)';

        localStorage.isHomePage = false;
    };

    BgController.prototype.isHome = function() {
        return window.location.hash === '#/home' || window.location.hash === '' || window.location.hash === '/';
    };

    angular.module('bg', [])
        .controller('BgController', BgController);

})(angular);