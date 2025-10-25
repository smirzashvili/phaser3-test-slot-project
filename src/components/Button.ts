import type { ButtonFrames } from "../types/game";

export default class Button extends Phaser.GameObjects.Sprite {
    private _scene: Phaser.Scene;
    private _frames: ButtonFrames

    constructor(scene: Phaser.Scene, x: number, y: number, texture: string, frames: ButtonFrames) {
        super(scene, x, y, texture, frames.defaultFrame)

        this._scene = scene;
        this._frames = frames

        this.setInteractive()
    }

    public onClick(callback: Function): Button {
        this.on('pointerdown', (callback));

        return this;
    }

    public disable(): void {
        this.disableInteractive();
        if (!this._frames.disableFrame) {
            this.setTint(0x808080)
        } else {
            this.setFrame(this._frames.disableFrame);
        }
    }

    public enable(): void {
        this.setInteractive();
        if (!this._frames.disableFrame) {
            this.clearTint()
        } else {
            this.setFrame(this._frames.defaultFrame);
        }
    }
    public disableInteractions(): void {
        this.disableInteractive()
    }
    public enableInteractions(): void {
        this.setInteractive()
    }

}
