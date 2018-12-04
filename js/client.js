var service = (function() {
    return {
        //环境变更
        baseURL: "http://192.168.10.43:8088/whale", // 基础url
        success: function(cb) {
            return function(res) {
                cb && cb(res)
            }
        },
        error: function(data) {
            alert('界面请求出现问题，请重试!')
        },
        ajax: function(url, data, type, cb) {
            var _this = this;
            return $.ajax({
                url: _this.baseURL + url,
                timeout: 8000,
                type: type,
                data: data,
                dataType: 'json',
                success: _this.success(cb),
                error: _this.error
            })
        }
    }
})()