import { Application, Point, Text } from "pixi.js";
import { PixiJSCacheUtil } from "../lib";

/**
 * DOMContentLoaded後の初期化処理。
 * デモに必要なパーツを一式初期化する。
 */
const onDomContentsLoaded = () => {
  const app = new Application({ width: 800, height: 600 });
  document.body.appendChild(app.view);

  const getTextField = () => {
    const baseLinePoint = new Point(36, 48);
    const field = new Text("testああ", { fill: "#FF0" });
    PixiJSCacheUtil.moveToBaselinePosition(field, baseLinePoint);
    return field;
  };

  const field = getTextField();
  app.stage.addChild(field);
};

/**
 * DOMContentLoaded以降に初期化処理を実行する
 */
if (document.readyState !== "loading") {
  onDomContentsLoaded();
} else {
  document.addEventListener("DOMContentLoaded", onDomContentsLoaded);
}
