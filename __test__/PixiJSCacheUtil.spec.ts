import { Text } from "pixi.js";
import { PixiJSCacheUtil } from "../src";

describe("PixiJSCacheUtil", () => {
  const textField = new Text("test");

  beforeEach(() => {
    textField.text = "test";
    textField.style.fontFamily = "dummy font name";
    textField.cacheAsBitmap = true;
  });

  test("init", () => {
    PixiJSCacheUtil.updateText({ target: textField, text: "testText" });
    expect(textField.text).toBe("testText");
  });

  /**
   * エラーが発生しないことのみをテストする
   */
  test("param is null", () => {
    PixiJSCacheUtil.updateText(null);
  });

  test("not cacheAsBitmap", () => {
    textField.cacheAsBitmap = false;
    PixiJSCacheUtil.updateText({ target: textField, text: "testText" });
    expect(textField.text).toBe("testText");
  });

  test("update style", () => {
    const styleID = textField.style.styleID;
    const fill = "#ff0000";
    const fontFamily = textField.style.fontFamily;
    PixiJSCacheUtil.updateText({
      target: textField,
      style: { fill },
    });
    expect(textField.style.fill).toBe(fill);
    expect(textField.style.fontFamily).toBe(fontFamily);
    expect(textField.style.styleID).not.toBe(styleID);
  });
});
