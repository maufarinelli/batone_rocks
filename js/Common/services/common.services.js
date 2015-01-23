'use strict'; 

(function(angular) {
    angular.module('common', [])
        .service('commonServices', function() {
            this.randomPos = function(length) {
                var randomList = [];
                while(randomList.length !== length) {
                    var n = Math.ceil(Math.random() * 10);

                    if(!_.contains(randomList, n)) {
                        randomList.push(n);
                    }
                }
                return randomList;
            };
        });
})(angular);