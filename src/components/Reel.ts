import data from '../data/gameData';
import Symbol from './Symbol';
import gsap from 'gsap';

export default class Reel extends Phaser.GameObjects.Container {
    private _scene: Phaser.Scene;
    private _symbols: Array<Symbol> = [];

    private _onFinish!: () => void;

    constructor(scene: Phaser.Scene, x: number, y: number) {
        super(scene, x, y);

        this._scene = scene;
    }

    public play(duration: number, finalResult: number) {
        gsap.to(this, {
            y: 200,
            duration: duration,
            ease: "linear",
            onComplete: () => {
                this._onFinish && this._onFinish()
            }
        });
    }

    public fillWithDefaults(texture: string) {
        for (let i = 0; i < 3; i++) {
            const symbol = new Symbol(this._scene, 0, 0, texture)
                .setScale(0.5)
            this.add(symbol)
            this._symbols.push(symbol)
        }
    }

    public onFinish(callback: () => void) {
        this._onFinish = callback
        return this;
    }
}