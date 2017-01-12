(function(angular) {
    'use strict';

    angular.module('moviecat.in_theaters', ['ngRoute', 'moviecat.services.http'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/in_theaters', {
            templateUrl: 'in_theaters/view.html',
            controller: 'InTheatersController'
        });
    }])

    .controller('InTheatersController', [
        '$scope',
        '$routeParams',
        'HttpService',
        function($scope, $routeParams, HttpService) {
            // 暴露数据
            // 是否加在完成
            $scope.loading = true;
            $scope.subjects = [];
            // 总个数
            $scope.totalCount = 0;

            // 使用自定义http服务请求数据
            var url = 'http://api.douban.com/v2/movie/in_theaters';
            HttpService.jsonp(url, { count: 10 }, function(data) {

                // 因为subjects是通过第三方库更新的，
                // 所以需要用$apply通知NG同步数据
                // $apply中执行的函数，会通知NG更新模型和视图
                $scope.$apply(function() {
                    $scope.subjects = data.subjects;
                    $scope.total = data.total;
                    $scope.loading = false;
                });
            });

            // 暴露方法
        }
    ]);

})(angular);
