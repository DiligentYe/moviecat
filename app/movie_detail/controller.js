(function(angular) {
    angular.module('moviecat.movie_detail', ['ngRoute', 'moviecat.services.http'])
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
            function($scope, $routeParams, HttpService) {
                $scope.movie = null;
                var url = 'http://api.douban.com/v2/movie/subject/' + $routeParams.id;
                HttpService.jsonp(url, {}, function(data) {
                    $scope.movie = data;
                    $scope.$apply();
                })
            }
        ]);

})(angular);
