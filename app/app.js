'use strict';

// Declare app level module which depends on views, and components
angular.module('moviecat', [
        'ngRoute',
        'moviecat.movie_detail',
        'moviecat.movie_list',
        'moviecat.directives.auto_focus',
        'moviecat.directives.search',
        'moviecat.directives.loading'
    ])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.otherwise({ redirectTo: '/in_theaters/1' });
    }])
    // 定义一些常量
    .constant('AppConfig', {
        // 每页最大电影展示数目
        pageSize: 10,
        // api地址
        listAddress: 'http://api.douban.com/v2/movie/',
        detailAddress: 'http://api.douban.com/v2/movie/subject/'
    })
    // 搜索栏控制器
    .controller('SearchController', [
        '$scope',
        '$route',
        function($scope, $route) {
            // 接收搜索框中的文本
            $scope.input = '';

            // 提交时执行的方法
            $scope.search = function() {
                $route.updateParams({ category: 'search', page: 1, q: $scope.input });
            }
        }
    ]);
// 导航栏控制器
// .controller('NavController', [
//     '$scope',
//     '$location',
//     function($scope, $location) {
//         $scope.$location = $location;
//         $scope.type = '';
//         $scope.$watch('$location.path()', function(now) {
//             $scope.type = now.split('/')[1];
//         });
//     }
// ]);
