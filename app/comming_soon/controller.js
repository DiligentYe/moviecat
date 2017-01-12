(function(angular) {
    'use strict';

    angular.module('moviecat.comming_soon', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/comming_soon', {
            templateUrl: 'comming_soon/view.html',
            controller: 'CommingSoonController'
        });
    }])

    .controller('CommingSoonController', [function() {

    }]);

})(angular);
