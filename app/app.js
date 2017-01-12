'use strict';

// Declare app level module which depends on views, and components
angular.module('moviecat', [
        'ngRoute',
        'moviecat.movie_list'
    ])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.otherwise({ redirectTo: '/in_theaters/1' });
    }])
    .controller('NavController', [
        '$scope',
        '$location',
        function($scope, $location) {
            $scope.$location = $location;
            $scope.type = '';
            $scope.$watch('$location.path()', function(now) {
                $scope.type = now.split('/')[1];
            });
        }
    ]);
