(function(angular) {
    'use strict';

    angular.module('moviecat.movie_list', ['ngRoute', 'moviecat.services.http'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/:category/:page', {
            templateUrl: 'movie_list/view.html',
            controller: 'MovieListController'
        });
    }])

    .controller('MovieListController', [
        '$scope',
        '$routeParams',
        '$route',
        'HttpService',
        function($scope, $routeParams, $route, HttpService) {
            // 暴露数据
            // 是否加在完成
            $scope.loading = true;
            $scope.subjects = [];
            $scope.title = '';
            // 总个数
            $scope.totalCount = 0;

            // 分页相关数据
            var count = 2; // 每页显示的最大信息条数
            $scope.totalPages = 0; // 记录总页数
            $scope.currentPage = parseInt($routeParams.page); // 获取当前所在页

            var start = ($scope.currentPage - 1) * count; // 计算纪录起始位置




            // 使用自定义http服务请求数据
            var url = 'http://api.douban.com/v2/movie/' + $routeParams.category;
            HttpService.jsonp(url, { count: count, start: start, q: $routeParams.q }, function(data) {

                // 因为subjects是通过第三方库更新的，
                // 所以需要用$apply通知NG同步数据
                // $apply中执行的函数，会通知NG更新模型和视图
                $scope.$apply(function() {
                    $scope.subjects = data.subjects;
                    $scope.totalCount = data.total;
                    $scope.totalPages = Math.ceil($scope.totalCount / count);
                    $scope.loading = false;
                    $scope.title = data.title;
                });
            });

            // 暴露方法
            // 控制当前页
            $scope.goPage = function(page) {
                // 如果当前页不是第一页也不是做后一页，设置当前页为page
                if (page > 0 && page <= $scope.totalPages) {

                    $route.updateParams({ page: page });
                }
            };
        }
    ]);

})(angular);
