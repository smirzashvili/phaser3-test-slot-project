import data from '../data/gameData';

export default class Symbol extends Phaser.GameObjects.Image {
    private _scene: Phaser.Scene;

    constructor(scene: Phaser.Scene, x: number, y: number, texture: string) {
        super(scene, x, y, texture);

        this._scene = scene;
    }
}