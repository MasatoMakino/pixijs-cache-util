import { Application, Text } from "pixi.js";

const getRandomString = (length) => {
  // 生成する文字列に含める文字セット
  const c = "abcdefghijklmnopqrstuvwxyz0123456789";
  const cl = c.length;
  let randomString = "";
  for (let i = 0; i < length; i++) {
    randomString += c[Math.floor(Math.random() * cl)];
  }
  return randomString;
};

/**
 * テキストレンダリングのパフォーマンステスト
 * cacheAsBitmapがどの程度レンダリング速度に影響を与えるか調査するためのもの
 *
 * @param useCache
 */
export function startTest(useCache) {
  const app = new Application({ width: 1280, height: 800 });
  document.body.appendChild(app.view);

  const addTextField = (text, x, y) => {
    const field = new Text(text, { fill: "#fff" });
    field.position.set(x, y);
    field.cacheAsBitmap = useCache;
    app.stage.addChild(field);
  };

  const dummyText = getRandomString(8);
  for (let i = 0; i < 60; i++) {
    for (let j = 0; j < 40; j++) {
      addTextField(dummyText, i * 36, j * 20);
    }
  }
}
