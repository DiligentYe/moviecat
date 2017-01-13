(function(angular) {
    angular.module('moviecat.directives.search', ['ngRoute'])
        .directive('search', [
            '$route',
            function($route) {
                return {
                    restrict: 'AE',
                    // 用模版替换当前指令元素
                    replace: true,
                    // 模版内由该指令直接控制，不需要添加控制器
                    template: '<form class="navbar-form navbar-right" ng-submit="search()"><input type="text" class="form-control" placeholder="Search..." ng-model="input"></form>',
                    link: function($scope, element, attributes) {
                        // $scope的使用范围就是模版内容
                        $scope.input = '';

                        $scope.search = function() {
                            $route.updateParams({
                                category: 'search',
                                page: 1,
                                q: $scope.input
                            });
                        }
                    }
                }
            }
        ])
})(angular);
