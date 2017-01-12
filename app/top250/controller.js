(function(angular) {
    'use strict';

    angular.module('moviecat.top250', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/top250', {
            templateUrl: 'top250/view.html',
            controller: 'Top250Controller'
        });
    }])

    .controller('Top250Controller', [function() {

    }]);

})(angular);
