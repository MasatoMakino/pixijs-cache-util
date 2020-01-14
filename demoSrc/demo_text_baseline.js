import { Application, Text, TextMetrics, Point } from "pixi.js";

/**
 * DOMContentLoaded後の初期化処理。
 * デモに必要なパーツを一式初期化する。
 */
const onDomContentsLoaded = () => {
  const app = new Application({ width: 800, height: 600 });
  document.body.appendChild(app.view);

  const getTextField = () => {
    const shiftField = (field, baseLinePoint) => {
      const ascent = getAscent(field);
      field.position.set(baseLinePoint.x, baseLinePoint.y - ascent);
    };

    const getAscent = field => {
      const measured = TextMetrics.measureText(
        field.text || " ",
        field.style,
        field.style.wordWrap,
        field.canvas
      );
      return measured.fontProperties.ascent;
    };

    const baseLinePoint = new Point(36, 48);
    const field = new Text("testああ", { fill: "#FF0" });
    shiftField(field, baseLinePoint);
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
