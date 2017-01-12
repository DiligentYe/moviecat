(function(angular) {
    angular.module('moviecat.directives.auto_focus', [])
        .directive('autoFocus', [
            '$location',
            function($location) {
                return {
                    restrict: 'A',
                    link: function($scope, element, attribute) {
                        // 刚加在页面时，焦点选定问题
                        var path = $location.path().split('/')[1];
                        var aLink = element.children().attr('href').split('/')[1];
                        if (path == aLink) {
                            element.addClass('active');
                        }

                        // 给每个元素绑定点击事件，给点击的按钮添加active样式
                        element.on('click', function() {
                            // 排他思想
                            element.parent().children().removeClass('active');
                            element.addClass('active');
                        })

                    }
                }
            }
        ])
})(angular);
