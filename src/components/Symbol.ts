import data from '../data/gameData';

export default class Symbol extends Phaser.GameObjects.Sprite {
    private _scene: Phaser.Scene;

    constructor(scene: Phaser.Scene, x: number, y: number, texture: string, frame: string) {
        super(scene, x, y, texture, frame);

        this._scene = scene;
    }
}