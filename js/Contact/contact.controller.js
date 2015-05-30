'use strict';

(function(angular) {

    function ContactController($scope) {
        $scope.responseSuccess = false;
        $scope.responseError = false;

        var form = $('#contact-form');

    	form.on('submit', function(event) {
            $.post('templates/send.php', form.serialize(), function(result) {
                if(result > 0) {
                    $scope.responseSuccess = true; // temporary, unitl fix the bug of mail send
                    $scope.responseError = false;
                }
                else {
                    $scope.responseSuccess = false;
                    $scope.responseError = true;
                }
                $scope.$apply();
            });
            event.preventDefault();
        });
    }

    angular.module('contact', [])
        .controller('ContactController', ContactController);

})(angular);