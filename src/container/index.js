import { Application, Assets, Container, Sprite } from "pixi.js";

(async () => {
  // Create a new application
  // Створіть новий додаток
  const app = new Application();

  // Initialize the application
  // Ініціалізація програми
  await app.init({ backgroundAlpha: 0, resizeTo: window });

  // Append the application canvas to the document body
  // Додайте полотно програми до тіла документа

  // Canvas - це HTML елемент відповідає за виведення графіки на екран.
  // Він містить "все", що рендериться через Pixi.js.
  // Пікселі на canvas — це фактичне місце, де з'являється ваш візуальний контент.

  document.body.appendChild(app.canvas);

  // Create and add a container to the stage
  // Створіть і додайте контейнер до сцени

  //Container — це логічна група об'єктів, що дозволяє їх організовувати та маніпулювати

  const container = new Container();

  //Stage — це основний контейнер для рендерингу сцени, до якого додаються всі інші елементи, і це зазвичай є кореневий контейнер для всієї графіки в Pixi.js.

  app.stage.addChild(container);

  // Load the bunny texture
  // Завантажте текстуру кролика

  // Assets в Pixi.js — це система для зручного завантаження і управління медіа-ресурсами (зображеннями, текстурами, звуками тощо).

  const texture = await Assets.load("https://pixijs.com/assets/bunny.png");

  // Create a 5x5 grid of bunnies in the container
  // for (let i = 0; i < 25; i++)
  // {
  //     const bunny = new Sprite(texture);

  //     bunny.x = (i % 5) * 40;
  //     bunny.y = Math.floor(i / 5) * 40;
  //     container.addChild(bunny);
  // }
  const bunny = new Sprite(texture);
  container.addChild(bunny);

  // Move the container to the center
  // ліворуч верхній кут контейнера буде розташований в середині екрану, тобто у вас буде контейнер, який починається з центру екрану
  container.x = app.screen.width /2;
  container.y = app.screen.height /2;

  // Center the bunny sprites in local container coordinates
  // container.pivot.x = container.width / 2;
  // container.pivot.y = container.height / 2;

  // Listen for animate update
  app.ticker.add((time) => {
    // Continuously rotate the container!
    // * use delta to create frame-independent transform *
    container.rotation -= 0.01 * time.deltaTime;
  });
})();
