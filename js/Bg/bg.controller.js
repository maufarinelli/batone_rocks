'use strict';

(function(angular) {
    var _self;

    function BgController($scope, $rootScope) {
        var windowWidth = window.innerWidth,
            batonePhotoWidth = 1080;

        _self = this;
        this.toMove = windowWidth - ((windowWidth - batonePhotoWidth) / 2) - batonePhotoWidth/2;

        $scope.newVisitor = localStorage.newVisitor ? false : true;
        
        if($scope.newVisitor) { 
            this.animate();
        }
        else {
            this.posRight();
        }

        $rootScope.home = function() {
            localStorage.removeItem('newVisitor');
            $scope.newVisitor = true;
            window.location.reload();
        }

        /*window.onunload = function(){
            localStorage.removeItem('newVisitor');
        };*/   
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

        localStorage.newVisitor = false;
    };

    angular.module('bg', [])
        .controller('BgController', BgController);

})(angular);