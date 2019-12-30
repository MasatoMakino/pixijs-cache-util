import { Application, Text } from "pixi.js";
import { PixiJSCacheUtil } from "../bin";

/**
 * DOMContentLoaded後の初期化処理。
 * デモに必要なパーツを一式初期化する。
 */
const onDomContentsLoaded = () => {
  const app = new Application({ width: 800, height: 600 });
  document.body.appendChild(app.view);

  const field = new Text("test", { fill: "#FF0" });
  field.cacheAsBitmap = true;
  app.stage.addChild(field);

  PixiJSCacheUtil.updateText({
    target: field,
    style: { fill: "#F0F", fontSize: 24 }
  });
  field.text = "new Text";

  setTimeout(() => {
    console.log("Time!");
    PixiJSCacheUtil.updateText({
      target: field,
      text: "new new Text",
      style: { fill: "#F00", fontSize: "48px" }
    });
    console.log(field.text);
  }, 1000);
};

/**
 * DOMContentLoaded以降に初期化処理を実行する
 */
if (document.readyState !== "loading") {
  onDomContentsLoaded();
} else {
  document.addEventListener("DOMContentLoaded", onDomContentsLoaded);
}
