import Phaser from 'phaser';
import Preload from './scenes/Preload';
import Loading from './scenes/Loading';
import MainGame from './scenes/MainGame';
import data from './data/gameData';
import * as spine from "@esotericsoftware/spine-phaser-v3"

const gameConfig: Phaser.Types.Core.GameConfig = {
  type: Phaser.WEBGL,
  parent: 'game',
  width: data.gameWidth,
  height: data.gameHeight,
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
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
  plugins: {
    scene: [
        { key: "spine.SpinePlugin", plugin: spine.SpinePlugin, mapping: "spine" }
    ]
  }
};

export default gameConfig;