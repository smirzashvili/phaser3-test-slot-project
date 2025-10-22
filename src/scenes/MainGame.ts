import Phaser from 'phaser';
import data from '../data/gameData';
import Board from '../components/Board';
import ControlPanel from '../components/ControlPanel';
import Button from '../components/Button';
import AudioManager from '../utils/AudioManager';

export default class MainGameScene extends Phaser.Scene {
  private _container!: Phaser.GameObjects.Container;

  private _background!: Phaser.GameObjects.Image;
  private _board!: Board
  private _controlPanel!: ControlPanel

  constructor() {
    super('MainGameScene');
  }

  create() {

    data.audioManager = new AudioManager(this)
    data.audioManager.bgMusic.play()

    this._container = this.add.container(0, 0);

    this._background = this.add.image(data.gameWidth / 2, data.gameHeight / 2, 'background')
      .setOrigin(0.5,0.5)
    const scale = Math.max(data.gameWidth / this._background.width, data.gameHeight / this._background.height)
    this._background.setScale(scale)
    this._container.add(this._background)

    this._board = new Board(this, data.gameWidth/2, data.gameHeight/2)
    this._container.add(this._board)

    this._controlPanel = new ControlPanel(this, 0, -20)
      .onPlay(() => {
        this._board.play()
      })
    this._container.add(this._controlPanel)
  }
}