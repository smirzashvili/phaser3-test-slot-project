import Phaser from 'phaser';
import Preload from './scenes/Preload';
import Loading from './scenes/Loading';
import MainGame from './scenes/MainGame';
// import { SpinePlugin } from '@esotericsoftware/phaser-spine-plugin';

const gameConfig: Phaser.Types.Core.GameConfig = {
  type: Phaser.WEBGL,
  parent: 'game',
  width: 800,
  height: 600,
  scale: {
    mode: Phaser.Scale.FIT,
  },
  antialiasGL: false,
  physics: {
    default: 'none',
    arcade: {
        debug: false
    }
  },
  backgroundColor: '#1a1a1a',
  scene: [Preload, Loading, MainGame],
//   plugins: {
//     global: [
//         { key: 'SpinePlugin', plugin: SpinePlugin, start: true }
//     ],
//   },
};

export default gameConfig;