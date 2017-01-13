(function(angular) {
    angular.module('moviecat.directives.loading', [])
        .directive('loading', [function() {
            return {
                restrict: 'AE',
                template: '<div id="mask" style="position: fixed;top: 0;bottom: 0;left: 0;right: 0;padding-top: 100px;background-color: rgba(0, 0, 0, 0.3);z-index: 1000;" ng-if="loading"><div class="spinner"><div class="bounce1"></div><div class="bounce2"></div><div class="bounce3"></div></div></div>',
                replace: true
            };
        }]);
})(angular);
