import Phaser from 'phaser';
import data from '../data/gameData';
import Board from '../components/Board';
import ControlPanel from '../components/ControlPanel';
import AudioManager from '../utils/AudioManager';
import { SpineGameObject } from '@esotericsoftware/spine-phaser-v3';

export default class MainGameScene extends Phaser.Scene {
  private _container!: Phaser.GameObjects.Container;
  private _background!: Phaser.GameObjects.Image;
  private _board!: Board;
  private _controlPanel!: ControlPanel
  private _spineBoy!: SpineGameObject;

  constructor() {
    super('MainGameScene');
  }

  create() {
    data.audioManager = new AudioManager(this)
    data.audioManager.bgMusic.play()

    this._container = this.add.container(0, 0);

    this._background = this.add.image(data.gameWidth / 2, data.gameHeight / 2, 'background').setOrigin(0.5,0.5)
    const scale = Math.max(data.gameWidth / this._background.width, data.gameHeight / this._background.height)
    this._background.setScale(scale)
    this._container.add(this._background)

    this._board = new Board(this, data.gameWidth/2, data.gameHeight/2 - 80)
      .onFinish((isWin:boolean) => {
        if(isWin) {
          data.audioManager.win.play()
          this._spineBoy.animationState.setAnimation(0, "jump")
        } else {
          this._spineBoy.animationState.setAnimation(0, "death")
        }
        this._spineBoy.animationState.addAnimation(0, 'walk', true, 0);

        this._controlPanel.finish()
      })
    this._container.add(this._board)

    this._controlPanel = new ControlPanel(this, 0, 40)
      .onPlay(() => {
        data.audioManager.win.isPlaying && data.audioManager.win.stop()
        this._board.play()
        this._spineBoy.animationState.setAnimation(0, "walk", true);
      })
    this._container.add(this._controlPanel)

    this._spineBoy = this.add.spine(data.gameWidth/2 + 300, data.gameHeight/2 + 200, 'spineboy-data', "spineboy-atlas") as SpineGameObject
    this._spineBoy.setScale(.2)
    this._spineBoy.animationState.setAnimation(0, "walk", true);
    this._container.add(this._spineBoy)
  }
}