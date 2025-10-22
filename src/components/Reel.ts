import data from '../data/gameData';
import Symbol from './Symbol';
import { Symbols, SymbolNames } from '../enums/Enums';

export default class Reel extends Phaser.GameObjects.Container {
    private _scene: Phaser.Scene;

    constructor(scene: Phaser.Scene, x: number, y: number) {
        super(scene, x, y);

        this._scene = scene;

        this._draw()
    }

    public play(duration: number, finalResult: number) {
        
    }

    private _draw() {
        // this._fillWithStarterSymbols()
    }

    public fillWithDefaults() {
        const randomKey = Phaser.Math.RND.pick(SymbolNames);

        for (let i = 0; i < 3; i++) {
            const symbol = new Symbol(this._scene, 0, 0, randomKey)
                .setScale(0.5)
            this.add(symbol)
        }
    }
}