(function(angular) {
    'use strict';

    // 由于angular自带jsonp函数不支持自定义函数名，
    // 并且angular随机分配的回调函数名称不被豆瓣支持。
    // 因此要自定义http服务
    angular.module('moviecat.services.http', [])
        .service('HttpService', [
            '$window',
            '$document',
            function($window, $document) {
                // console.log($window);
                // console.log($document);
                // 定义jsonp函数
                // url: http://api.douban.com/v2/movie/in_theaters
                this.jsonp = function(url, params, callback) {
                    // 创建一个新的合法的回调函数名
                    var suffix = Math.random().toString().replace('.', '');
                    var cbname = 'my_jsonp_' + suffix;

                    $window[cbname] = function(data) {
                        // 设置回调函数
                        callback(data);
                        // 回调函数执行完之后自动清除，
                        // 防止页面请求jsonp script标签无限增长
                        $document[0].body.removeChild(scriptElement);
                    };

                    // 处理链接参数部分
                    url += url.indexOf('?') == -1 ? '?' : '&'
                    for (var key in params) {
                        url += key + '=' + params[key] + '&';
                    }
                    url += 'callback=' + cbname;
                    console.log(url);

                    // 创建一个script标签
                    var scriptElement = $document[0].createElement('script');

                    // 挂载回调函数
                    scriptElement.src = url;

                    // 将标签该在到页面上
                    $document[0].body.appendChild(scriptElement);
                }
            }
        ]);

})(angular);
