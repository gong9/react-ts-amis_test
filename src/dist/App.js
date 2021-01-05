"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var react_1 = require("react");
require("amis/lib/themes/default.css");
var axios_1 = require("axios");
var copy_to_clipboard_1 = require("copy-to-clipboard");
var amis_1 = require("amis");
var Toast_1 = require("amis/lib/components/Toast");
require("./custom/Test01");
// amis 环境配置
var env = {
    // 下面三个接口必须实现
    fetcher: function (_a) {
        var url = _a.url, // 接口地址
        method = _a.method, // 请求方法 get、post、put、delete
        data = _a.data, // 请求数据·
        responseType = _a.responseType, config = _a.config, // 其他配置
        headers = _a.headers;
        config = config || {};
        config.withCredentials = true;
        responseType && (config.responseType = responseType);
        if (config.cancelExecutor) {
            config.cancelToken = new axios_1["default"].CancelToken(config.cancelExecutor);
        }
        config.headers = headers || {};
        if (method !== 'post' && method !== 'put' && method !== 'patch') {
            if (data) {
                config.params = data;
            }
            return axios_1["default"][method](url, config);
        }
        else if (data && data instanceof FormData) {
            config.headers = config.headers || {};
            config.headers['Content-Type'] = 'multipart/form-data';
        }
        else if (data &&
            typeof data !== 'string' &&
            !(data instanceof Blob) &&
            !(data instanceof ArrayBuffer)) {
            data = JSON.stringify(data);
            config.headers = config.headers || {};
            config.headers['Content-Type'] = 'application/json';
        }
        return axios_1["default"][method](url, data, config);
    },
    isCancel: function (value) { return axios_1["default"].isCancel(value); },
    copy: function (content) {
        copy_to_clipboard_1["default"](content);
        Toast_1.toast.success('内容已复制到粘贴板');
    }
};
var AMISComponent = /** @class */ (function (_super) {
    __extends(AMISComponent, _super);
    function AMISComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AMISComponent.prototype.render = function () {
        return amis_1.render(
        // 这里是 amis 的 Json 配置。
        {
            "type": "page",
            "title": "录音组件",
            "body": {
                "type": "record",
                "url": 'www.baidu.com',
                "sampleBit": 16,
                "sampleRate": 16000,
                "numChannel": 1
            }
        }, {
        // props...
        }, env);
    };
    return AMISComponent;
}(react_1["default"].Component));
exports["default"] = AMISComponent;
