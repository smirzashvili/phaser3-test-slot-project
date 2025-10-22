import Phaser from 'phaser';
import gameConfig from './gameConfig';
import data from './data/gameData';
import './css/style.css';

window.onload = async () => {
  data.isWebpSupported = await checkWebpSupport();

  const game = new Phaser.Game(gameConfig);

  //@ts-ignore
  (globalThis.__PHASER_GAME__) = game;
};

function checkWebpSupport() {
  return new Promise<boolean>(res => {
    const webP: HTMLImageElement = new Image();
    webP.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
    webP.onload = webP.onerror = () => {
      res(webP.height === 2);
    };
  })
};