import * as PIXI from "./pixi.min.mjs";
import {Sprite, Application, Graphics} from "./pixi.min.mjs";

const app = new PIXI.Application({
    width: 1080,
    height: 1920,
    antialias: false,
    transparent: false,
    resolution: 0,
    background: 0xB0B0B0,
  });

  document.body.appendChild(app.view);
  
  // Создаем контейнер для интерфейсных элементов
  const container = new PIXI.Container();
  app.stage.addChild(container);
  
  // Создаем текстовый элемент
  const text = new PIXI.Text('Адаптивный интерфейс', {
    fontSize: 62,
    fill: 'white',
  });
  text.anchor.set(0.5);
  text.position.set(app.screen.width / 2, app.screen.height / 2);
  container.addChild(text);
  
  // Функция для обновления размеров элементов при изменении размера окна
  function resize() {
    app.renderer.resize(window.innerWidth, window.innerHeight);
    background.width = app.screen.width;
    background.height = app.screen.height;
    text.position.set(app.screen.width / 2, app.screen.height / 2);
  }
  
  // Обработчик события изменения размера окна
  window.addEventListener('resize', resize);
  
  app.loader.load(() => {
    resize();
  });
