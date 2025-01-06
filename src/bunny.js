import { Application, Assets, Sprite } from "pixi.js";

// Asynchronous IIFE
(async () => {
  // Create a PixiJS application.
  const app = new Application();

  // Intialize the application.
  await app.init({ background: "#1099bb", resizeTo: window });

  // Then adding the application's canvas to the DOM body.
  document.body.appendChild(app.canvas);

  //завантажуємо текстуру кролика
  const texture = await Assets.load("https://pixijs.com/assets/bunny.png");

  // створюємо новий спрайт із шляху до зображення
  const bunny = new Sprite(texture);

  // додаємо до сцени
  app.stage.addChild(bunny);

  //центруємо опорну точку спрайту
  bunny.anchor.set(0.5);
  //переміщуємо спрайт в центр екрану
  bunny.x = app.screen.width / 2;
  bunny.y = app.screen.height / 2;

  app.ticker.add((time) => {
    bunny.rotation += 0.05 * time.deltaTime;
});
})();
