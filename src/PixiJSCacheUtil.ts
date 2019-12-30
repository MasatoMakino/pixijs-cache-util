import { Text } from "pixi.js";
export interface TextUpdateParam {
  target: Text;
  text?: string;
  style?: {
    //from PIXI.TextStyle.constructor option
    align?: string;
    breakWords?: boolean;
    dropShadow?: boolean;
    dropShadowAlpha?: number;
    dropShadowAngle?: number;
    dropShadowBlur?: number;
    dropShadowColor?: string | number;
    dropShadowDistance?: number;
    fill?:
      | string
      | string[]
      | number
      | number[]
      | CanvasGradient
      | CanvasPattern;
    fillGradientType?: number;
    fillGradientStops?: number[];
    fontFamily?: string | string[];
    fontSize?: number | string;
    fontStyle?: string;
    fontVariant?: string;
    fontWeight?: string;
    leading?: number;
    letterSpacing?: number;
    lineHeight?: number;
    lineJoin?: string;
    miterLimit?: number;
    padding?: number;
    stroke?: string | number;
    strokeThickness?: number;
    trim?: boolean;
    textBaseline?: string;
    whiteSpace?: string;
    wordWrap?: boolean;
    wordWrapWidth?: number;
  };
}
export class PixiJSCacheUtil {
  static updateText(param: TextUpdateParam) {
    if (param == null) return;

    let isUpdate = false;
    if (param.text && param.target.text !== param.text) {
      param.target.text = param.text;
      isUpdate = true;
    }

    const currentStyleID = param.target.style.styleID;
    if (param.style === undefined) param.style = {};
    for (let [key, value] of Object.entries(param.style)) {
      param.target.style[key] = value;
    }
    if (param.target.style.styleID !== currentStyleID) isUpdate = true;

    if (isUpdate && param.target.cacheAsBitmap) {
      param.target.cacheAsBitmap = false;
      param.target.cacheAsBitmap = true;
    }
  }
}
