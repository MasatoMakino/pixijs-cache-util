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
}
