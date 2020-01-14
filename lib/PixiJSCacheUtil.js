"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PixiJSCacheUtil = /** @class */ (function () {
    function PixiJSCacheUtil() {
    }
    PixiJSCacheUtil.updateText = function (param) {
        if (param == null)
            return;
        var isUpdate = false;
        if (param.text && param.target.text !== param.text) {
            param.target.text = param.text;
            isUpdate = true;
        }
        var currentStyleID = param.target.style.styleID;
        if (param.style === undefined)
            param.style = {};
        for (var _i = 0, _a = Object.entries(param.style); _i < _a.length; _i++) {
            var _b = _a[_i], key = _b[0], value = _b[1];
            param.target.style[key] = value;
        }
        if (param.target.style.styleID !== currentStyleID)
            isUpdate = true;
        if (isUpdate && param.target.cacheAsBitmap) {
            param.target.cacheAsBitmap = false;
            param.target.cacheAsBitmap = true;
        }
    };
    return PixiJSCacheUtil;
}());
exports.PixiJSCacheUtil = PixiJSCacheUtil;
