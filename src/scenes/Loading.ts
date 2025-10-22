import Phaser from 'phaser';

export default class LoadingScene extends Phaser.Scene {
  private _container!: Phaser.GameObjects.Container;
  private _progressBar!: Phaser.GameObjects.Graphics;

  constructor() {
    super('LoadingScene');
  }

  preload() {
    this._draw();

    this._initializeLoadingEvents()

    this.load.path = '../assets/';

    this.load.image('background', 'images/background.jpeg');
    this.load.image('board', 'images/board.png');
    this.load.image('banana', 'images/banana.png');
    this.load.image('blackberry', 'images/blackberry.png');
    this.load.image('cherry', 'images/cherry.png'); 
    this.load.image('spinButton', 'images/spin.png'); 
    this.load.image('soundOn', 'images/sound_on.png'); 
    this.load.image('soundOff', 'images/sound_off.png'); 


    // // Audio
    // // IMPORTANT: You need to find these assets and place them in /src/assets/audio
    this.load.audio('bg_music', 'audio/bg_music.mp3');
    this.load.audio('spin', 'audio/spin.wav');
    this.load.audio('win', 'audio/win.wav');

    // Spine Animation
    // Get files from: https://github.com/yandeu/phaser3-spine-example/tree/master/public/assets/spine
    // Place them in /src/assets/spine
    // this.load.spine(
    //   'goblin',
    //   'assets/spine/goblin-ess.json',
    //   'assets/spine/goblin.atlas',
    //   false
    // );
  }

  private _draw() {
    const { width, height } = this.game.scale;

    this._container = this.add.container(0, 0);

    const loadingText: Phaser.GameObjects.Text = this.add.text(width / 2, height / 2 - 70, 'Loading Game', { fontSize: '28px' })
      .setOrigin(0.5);
    this._container.add(loadingText);

    const progressBox: Phaser.GameObjects.Graphics = this.add.graphics()
      .fillStyle(0x222222, 0.8)
      .fillRect(width / 2 - 160, height / 2 - 20, 320, 50);
    this._container.add(progressBox);

    this._progressBar = this.add.graphics()
      .fillStyle(0xffffff, 1)
    this._container.add(this._progressBar);
  }

  private _initializeLoadingEvents() {
    this.load.on('progress', (value: number) => {
      this._progressBar
        .clear()
        .fillRect(250, 280, 300 * value, 30);
    });

    this.load.on('complete', () => {
      this._container.destroy(true);
      this.scene.start('MainGameScene');
    });
  }
}