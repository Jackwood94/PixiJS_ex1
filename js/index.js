import * as PIXI from "./pixi.min.mjs";
import {Sprite, Application, Graphics} from "./pixi.min.mjs";

// const app = new PIXI.Application();
const app = new PIXI.Application({
    width: window.innerWidth,
    height: window.innerHeight,
    antialias: true,
    transparent: false,
    resolution: 1,
    background: 0xA0A0A0,
  });
  
  // Добавляем холст PIXI.js на страницу
  document.body.appendChild(app.view);
  
  // Создаем контейнер для интерфейсных элементов
  const container = new PIXI.Container();
  app.stage.addChild(container);
  
  // Создаем спрайт для фонового изображения
//   const background = PIXI.Sprite.from('background.png');
//   container.addChild(background);
  
  // Создаем текстовый элемент
  const text = new PIXI.Text('Адаптивный интерфейс', {
    fontSize: 48,
    fill: 'white',
  });
  text.anchor.set(0.5);
  text.position.set(app.screen.width / 2, app.screen.height / 2);
  container.addChild(text);
  
  // Функция для обновления размеров элементов при изменении размера окна
  function resize() {
    app.renderer.resize(window.innerWidth, window.innerHeight);
    // background.width = app.screen.width;
    // background.height = app.screen.height;
    text.position.set(app.screen.width / 2, app.screen.height / 2);
  }
  
  // Обработчик события изменения размера окна
  window.addEventListener('resize', resize);
  
  // Вызываем функцию resize() при запуске приложения
  app.loader.load(() => {
    resize();
  });
