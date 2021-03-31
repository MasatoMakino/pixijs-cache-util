"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PixiJSCacheUtil = void 0;
var pixi_js_1 = require("pixi.js");
var PixiJSCacheUtil = /** @class */ (function () {
    function PixiJSCacheUtil() {
    }
    /**
     * テキストを更新する。
     * 更新内容が再描画を伴い、ビットマップキャッシュが有効な場合は、キャッシュも更新する。
     *
     * @param param
     */
    PixiJSCacheUtil.updateText = function (param) {
        var _a;
        if (param == null)
            return;
        var isUpdate = false;
        if (param.text && param.target.text !== param.text) {
            param.target.text = param.text;
            isUpdate = true;
        }
        var currentStyleID = param.target.style.styleID;
        (_a = param.style) !== null && _a !== void 0 ? _a : (param.style = {});
        for (var _i = 0, _b = Object.entries(param.style); _i < _b.length; _i++) {
            var _c = _b[_i], key = _c[0], value = _c[1];
            param.target.style[key] = value;
        }
        if (param.target.style.styleID !== currentStyleID)
            isUpdate = true;
        if (isUpdate && param.target.cacheAsBitmap) {
            param.target.cacheAsBitmap = false;
            param.target.cacheAsBitmap = true;
        }
    };
    /**
     * フォントサイズを計測し、テキストフィールドをベースラインの位置に移動する。
     *
     * @param field
     * @param baselinePosition
     */
    PixiJSCacheUtil.moveToBaselinePosition = function (field, baselinePosition) {
        var getAscent = function (field) {
            var sizingText = "あ｜　";
            var measured = pixi_js_1.TextMetrics.measureText(sizingText, field.style, field.style.wordWrap, field.canvas);
            return measured.fontProperties.ascent;
        };
        var ascent = getAscent(field);
        field.position.set(baselinePosition.x, baselinePosition.y - ascent);
    };
    return PixiJSCacheUtil;
}());
exports.PixiJSCacheUtil = PixiJSCacheUtil;
