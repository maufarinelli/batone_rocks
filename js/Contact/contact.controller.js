'use strict';

(function(angular) {

    function ContactController($scope) {
        $scope.responseSuccess = false;
        $scope.responseError = false;

        var form = $('#contact-form');

    	form.on('submit', function(event) {
            $.post('send.php', form.serialize(), function(result) {
                console.log(result);

                if(result > 0) {
                    $scope.responseSuccess = true;
                    $scope.responseError = false;
                }
                else {
                    $scope.responseSuccess = false;
                    $scope.responseError = true;
                }
            });
            event.preventDefault();
        });
    }

    angular.module('contact', [])
        .controller('ContactController', ContactController);

})(angular);