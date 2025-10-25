import data from '../data/gameData';
import Button from '../components/Button';
import type { ControlPanelCallbacks } from '../types/game';

export default class ControlPanel extends Phaser.GameObjects.Container {
    private _scene: Phaser.Scene;
    private _spinButton!: Button;
    private _soundButton!: Button;

    private _onPlay!: ControlPanelCallbacks['onPlay'];

    constructor(scene: Phaser.Scene, x: number, y: number) {
        super(scene, x, y);

        this._scene = scene;

        this._draw()
    }

    private _draw() {
        this._spinButton = new Button(this._scene, data.gameWidth / 2, data.gameHeight / 2 + 130, 'images', {defaultFrame: 'spin'})
            .setOrigin(0.5,0.5)
            .setScale(0.5)
            .onClick(() => {
                this._play()
            })
        this.add(this._spinButton)
            
        this._soundButton = new Button(this._scene, data.gameWidth / 2 - 300, data.gameHeight / 2 + 130, 'images', {defaultFrame: 'sound_on', disableFrame: 'sound_off'})
            .setOrigin(0.5,0.5)
            .setScale(1)
            .onClick(() => {
                this._toggleSound()
            })
        this.add(this._soundButton)
    }

    private _play() {
        this._spinButton.disable()
        data.audioManager.spin.play()
        this._onPlay()
    }

    private _toggleSound() {
        if (!data.audioManager.getMute()) {
            this._soundButton.disable()
            data.audioManager.setMute(true)
        } else {
            this._soundButton.enable()
            data.audioManager.setMute(false)
        }
        this._soundButton.enableInteractions()
    }

    public finish() {
        this._spinButton.enable()
    }

    public onPlay(callback: ControlPanelCallbacks['onPlay']) {
        this._onPlay = callback
        return this;
    }
}