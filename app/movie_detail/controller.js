(function(angular) {
    angular.module('moviecat.movie_detail', [
            'ngRoute',
            'moviecat.services.http',
            'moviecat.directives.loading'
        ])
        .config([
            '$routeProvider',
            function($routeProvider) {
                $routeProvider.when('/subject/:id', {
                    templateUrl: 'movie_detail/view.html',
                    controller: 'DetailController'
                });
            }
        ])
        .controller('DetailController', [
            '$scope',
            '$routeParams',
            'HttpService',
            'AppConfig',
            function($scope, $routeParams, HttpService, AppConfig) {
                $scope.loading = true;
                $scope.movie = null;

                var url = AppConfig.detailAddress + $routeParams.id;
                HttpService.jsonp(url, {}, function(data) {
                    $scope.movie = data;
                    $scope.loading = false;
                    $scope.$apply();
                })
            }
        ]);

})(angular);
