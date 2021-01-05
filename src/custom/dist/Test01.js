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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.Test01Renderer = void 0;
var React = require("react");
var amis_1 = require("amis");
var Test01 = /** @class */ (function (_super) {
    __extends(Test01, _super);
    function Test01() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Test01.prototype.render = function () {
        return (React.createElement("div", null, "\u81EA\u5B9A\u4E49\u7EC4\u4EF6"));
    };
    return Test01;
}(React.Component));
var Test01Renderer = /** @class */ (function (_super) {
    __extends(Test01Renderer, _super);
    function Test01Renderer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Test01Renderer = __decorate([
        amis_1.Renderer({
            test: /(^|\/)my\-renderer$/
        })
    ], Test01Renderer);
    return Test01Renderer;
}(Test01));
exports.Test01Renderer = Test01Renderer;
