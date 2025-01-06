import { Graphics } from "pixi.js";

export function addStars(app) {
  const starCount = 20;
  const graphics = new Graphics();

  for (let i = 0; i < starCount; i += 1) {
    const x = (i * 0.786959 * app.screen.width) % app.screen.width;
    const y = (i * 0.9382 * app.screen.height) % app.screen.height;
    const radius = 2 + Math.random() * 3;
    const rotation = Math.random() * Math.PI * 2;

    graphics.star(x, y, 5, radius, 0, rotation).fill({ color: 0xffdf00, alpha: radius / 5 }) //Графічний API має вбудований star(x, y, points, radius, innerRadius?, rotation?)
      ; //fill(style)метод, щоб розфарбувати її, вказавши колір і непрозорість, обчислену від відсотка випадкового радіуса до максимального радіуса.
  }

  app.stage.addChild(graphics);
}

