var main = (function() {
    return {
        animatedTime: 0, // 动画需要用到的时间
        uploadLoadCount: 1, // 上传图片长度
        slideTime: 700, // slide time
        fadeTime: 300, // fade time
        // 设置根元素大小
        setFontSize: function() {
            // 初始化 fastclick
            FastClick.attach(document.body);
            var width = document.documentElement.clientWidth || window.screen.width;
            if (width < 320) {
                document.documentElement.style.fontSize = 320 / 37.5 * 2 + 'px';
            } else if (width > 750) {
                document.documentElement.style.fontSize = 750 / 37.5 * 2 + 'px';
            } else {
                document.documentElement.style.fontSize = width / 37.5 * 2 + 'px';
            }
            //this.judageUrl()
        },
        initSwiper: function (Ele) {
            Ele.swiper({
                loop: true,
                autoplay: 3000,//可选选项，自动滑动
            })
        },
        //获取URL参数 string
        queryString: function(name) {
            var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
            var r = window.location.search.substr(1).match(reg);
            if (r != null)
                return unescape(r[2]);
            return '';
        },
    }
})()