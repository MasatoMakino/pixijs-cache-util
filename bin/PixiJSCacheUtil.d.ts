import { Text } from "pixi.js";
export interface TextUpdateParam {
    target: Text;
    text?: string;
    style?: {
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
    };
}
export declare class PixiJSCacheUtil {
    static updateText(param: TextUpdateParam): void;
}
//# sourceMappingURL=PixiJSCacheUtil.d.ts.map