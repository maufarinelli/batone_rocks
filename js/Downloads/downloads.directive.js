'use strict';

(function(angular, _){
    var downloads = angular.module('downloads');

    downloads.directive('downloadsDirective', ['commonServices', function (commonServices) {
        return {
            restrict: 'E',
            templateUrl: 'templates/downloads-container.html',
            link: function ($scope, element, attrs) {
                var downloadList = element[0].querySelectorAll('.download'),
                    downloadClass = 'download-',
                    randomList = commonServices.randomPos(2);

                _.each(downloadList, function(download, index) {
                    download.setAttribute('class', 'download ' + downloadClass + randomList[index]);
                });
            }
        };
    }]);
})(angular, _);