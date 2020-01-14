export class PixiJSCacheUtil {
    static updateText(param) {
        if (param == null)
            return;
        let isUpdate = false;
        if (param.text && param.target.text !== param.text) {
            param.target.text = param.text;
            isUpdate = true;
        }
        const currentStyleID = param.target.style.styleID;
        if (param.style === undefined)
            param.style = {};
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
