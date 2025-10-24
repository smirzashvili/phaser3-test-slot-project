import Phaser from 'phaser';
import data from '../data/gameData';

export default class PreloadScene extends Phaser.Scene {
  constructor() {
    super('PreloadScene');
  }

  preload() {
    
  }

  async create() {
    data.isWebpSupported = await this._checkWebpSupport()

    this.scene.start('LoadingScene');
  }

  private _checkWebpSupport() {
    return new Promise<boolean>(res => {
      const webP: HTMLImageElement = new Image();
      webP.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
      webP.onload = webP.onerror = () => {
        res(webP.height === 2);
      };
    })
  }
}