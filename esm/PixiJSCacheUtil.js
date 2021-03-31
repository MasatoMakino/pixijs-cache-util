import { TextMetrics } from "pixi.js";
export class PixiJSCacheUtil {
    /**
     * テキストを更新する。
     * 更新内容が再描画を伴い、ビットマップキャッシュが有効な場合は、キャッシュも更新する。
     *
     * @param param
     */
    static updateText(param) {
        var _a;
        if (param == null)
            return;
        let isUpdate = false;
        if (param.text && param.target.text !== param.text) {
            param.target.text = param.text;
            isUpdate = true;
        }
        const currentStyleID = param.target.style.styleID;
        (_a = param.style) !== null && _a !== void 0 ? _a : (param.style = {});
        for (let [key, value] of Object.entries(param.style)) {
            param.target.style[key] = value;
        }
        if (param.target.style.styleID !== currentStyleID)
            isUpdate = true;
        if (isUpdate && param.target.cacheAsBitmap) {
            param.target.cacheAsBitmap = false;
            param.target.cacheAsBitmap = true;
        }
    }
    /**
     * フォントサイズを計測し、テキストフィールドをベースラインの位置に移動する。
     *
     * @param field
     * @param baselinePosition
     */
    static moveToBaselinePosition(field, baselinePosition) {
        const getAscent = (field) => {
            const sizingText = "あ｜　";
            const measured = TextMetrics.measureText(sizingText, field.style, field.style.wordWrap, field.canvas);
            return measured.fontProperties.ascent;
        };
        const ascent = getAscent(field);
        field.position.set(baselinePosition.x, baselinePosition.y - ascent);
    }
}
