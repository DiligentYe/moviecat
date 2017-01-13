(function(angular) {
    angular.module('moviecat.directives.auto_focus', [])
        .directive('autoFocus', [
            '$location',
            function($location) {
                var path = $location.path();
                if (!path) {
                    path = '/in_theaters/1';
                }
                return {
                    restrict: 'A',
                    link: function($scope, element, attribute) {
                        // 刚加在页面时，焦点选定问题
                        // var path = $location.path().split('/')[1];
                        // var aLink = element.children().attr('href').split('/')[1];

                        // 使用正则表达是匹配字符
                        // #/in_theaters/1
                        var aLink = element.children().attr('href');
                        aLink = aLink.replace(/#\/(\w+)\/\d+/, '$1').replace(/(\w+)\s*/, '$1');
                        // path = path.replace(/\/(.+?)\/\d+/, '$1')

                        if (path.match(aLink)) {
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
