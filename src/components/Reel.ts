import data from '../data/gameData';
import Symbol from './Symbol';
import gsap from 'gsap';
import { SymbolNames } from '../types/enums';

export default class Reel extends Phaser.GameObjects.Container {
    private _scene: Phaser.Scene;
    private _symbols: Array<Symbol> = [];

    private _symbolHeight = 170;
    private _spinCurrentSymbolsAmount = 0;
    private _spinSymbolsAmount = 10;
    private _spinFinalResult!: number;

    private _onFinish!: () => void;

    constructor(scene: Phaser.Scene, x: number, y: number) {
        super(scene, x, y);
        this._scene = scene;
    }

    public play(duration: number, finalResult: number) {
        this._spinCurrentSymbolsAmount = 0;
        const totalDistance = this._symbolHeight * this._spinSymbolsAmount;
        this._spinFinalResult = finalResult;

        gsap.to(this, {
            y: this.y + totalDistance,
            duration: duration,
            ease: "linear",
            onStart: () => this._generateTopSymbol(),
            onUpdate: () => this._recycleSymbols(),
            onComplete: () => this._completeSpinning(),
        });
    }

    private _generateTopSymbol() {
        const randomTexture = Phaser.Math.RND.pick(SymbolNames);
        const newSymbol = new Symbol(this._scene, 0, this._symbols[0].y - this._symbolHeight, 'images', randomTexture)
            .setScale(0.5);
        this.add(newSymbol);
        this._symbols.unshift(newSymbol);

        this._spinCurrentSymbolsAmount++
    }

    private _recycleSymbols() {
        const top = this._symbols[0];
        const bottom = this._symbols[1];

        if (bottom.y + this.y >= this._symbolHeight) {
            this._spinCurrentSymbolsAmount++;

            bottom.y = top.y - this._symbolHeight;
            
            let texture: string; 
            if (this._spinCurrentSymbolsAmount < this._spinSymbolsAmount) {
                texture = Phaser.Math.RND.pick(SymbolNames)
            } else {
                texture = SymbolNames[this._spinFinalResult]
            }
            bottom.setFrame(texture);

            this._symbols = [bottom, top];
        }
    }


    private _completeSpinning() {
        const top = this._symbols[0];
        top.destroy();
        this._symbols.splice(0, 1);

        gsap.to(this, {
            y: this.y + 15,
            duration: 0.4,
            ease: "power2.out",
            repeat: 1,
            yoyo: true,  
            onComplete: () => this._onFinish?.(),
        });
    }

    public fillWithDefaults(randomIndex: number) {
        const symbol = new Symbol(this._scene, 0, 0, 'images', SymbolNames[randomIndex]).setScale(0.5);
        this.add(symbol);
        this._symbols.push(symbol);
    }

    public onFinish(callback: () => void) {
        this._onFinish = callback;
        return this;
    }
}
