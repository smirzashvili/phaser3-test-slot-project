import Phaser from 'phaser';
import gameConfig from './gameConfig';

window.onload = async () => {
  const isWebpSupported = await checkWebpSupport();

  new Phaser.Game(gameConfig);
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