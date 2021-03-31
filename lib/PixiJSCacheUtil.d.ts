import { Point, Text } from "pixi.js";
/**
 * テキストの更新方法を指定するオプション
 */
export interface TextUpdateParam {
    /**
     * 更新されるテキストオブジェクト
     */
    target: Text;
    /**
     * テキストの内容
     */
    text?: string;
    /**
     * テキストのスタイル
     */
    style?: TextStyleParam;
}
/**
 * テキストの更新スタイル
 *
 * It is based on [PIXI.TextStyle.constructor] option
 *
 * このオブジェクトはPIXI.TextStyleを継承しない。
 * PIXI.TextStyleにはデフォルト値があるため、インスタンス化するとundefinedな値を受け付けない。
 * TextStyleParamでは、undefinedは更新以前のパラメーターを維持する。
 *
 * @see https://pixijs.download/dev/docs/PIXI.TextStyle.html
 */
export interface TextStyleParam {
    align?: string;
    breakWords?: boolean;
    dropShadow?: boolean;
    dropShadowAlpha?: number;
    dropShadowAngle?: number;
    dropShadowBlur?: number;
    dropShadowColor?: string | number;
    dropShadowDistance?: number;
    fill?: string | string[] | number | number[] | CanvasGradient | CanvasPattern;
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
}
export declare class PixiJSCacheUtil {
    /**
     * テキストを更新する。
     * 更新内容が再描画を伴い、ビットマップキャッシュが有効な場合は、キャッシュも更新する。
     *
     * @param param
     */
    static updateText(param: TextUpdateParam): void;
    /**
     * フォントサイズを計測し、テキストフィールドをベースラインの位置に移動する。
     *
     * @param field
     * @param baselinePosition
     */
    static moveToBaselinePosition(field: Text, baselinePosition: Point): void;
}
//# sourceMappingURL=PixiJSCacheUtil.d.ts.map