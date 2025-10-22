import data from '../data/gameData';
import Reel from './Reel';
import { Symbols, SymbolNames } from '../enums/Enums';

export default class Board extends Phaser.GameObjects.Container {
    private _scene: Phaser.Scene;
    private _board!: Phaser.GameObjects.Image;
    private _reels: Array<Reel> = [];

    private _maskContainer!: Phaser.GameObjects.Container
    private _mask!: Phaser.GameObjects.Graphics

    private _isWin!: boolean;


    private _onFinish!: () => void;
    private _onWin!: () => void;
    private _onLoss!: () => void;

    constructor(scene: Phaser.Scene, x: number, y: number) {
        super(scene, x, y);

        this._scene = scene;

        this._draw()
    }

    private _draw() {
        this._board = this._scene.add.image(0, 0, 'board')
        this._board.setDisplaySize(data.gameWidth/1.2, this._board.height * (data.gameWidth/1.2 * 1/this._board.width))
        this.add(this._board);

        this._maskContainer = this._scene.add.container(0, 0);
        this.add(this._maskContainer)

        for(let i = 0; i < data.reelsAmount; i++){
            const startOffSetX = this._board.displayWidth/6
            const x = startOffSetX + -this._board.displayWidth/2 + this._board.displayWidth * i/3
            const reel = new Reel(this._scene, x, 0)
            this._reels.push(reel)
            this._maskContainer.add(reel)

            const randomTexture: string = Phaser.Math.RND.pick(SymbolNames);
            reel.fillWithDefaults(randomTexture);

            if(i === data.reelsAmount - 1) {
                this._reels[i].onFinish(() => {
                    if(this._isWin) {
                        this._onWin()
                    } else {
                        this._onLoss()
                    }
                    this._onFinish()
                })
            }
        }

        const maskPadding = 30
        this._mask = this._scene.add.graphics()
            .fillStyle(0xffffff)
            .fillRect(
                this.x - this._board.displayWidth / 2 + maskPadding/2,
                this.y - this._board.displayHeight / 2 + maskPadding/2,
                this._board.displayWidth - maskPadding,
                this._board.displayHeight - maskPadding
            )
            .setVisible(false);

        const maskShape = this._mask.createGeometryMask();
        this._maskContainer.setMask(maskShape)
    }

    public async play() {
        const result = await this.mockServerSpin();
        this._isWin = new Set(result).size === 1;
        
        const durationPerReel = [1.2, 1.4, 1.6]
        for(let i = 0; i < data.reelsAmount; i++){
            this._reels[i].play(durationPerReel[i], result[i])
        }   
    }

    private mockServerSpin(): Promise<number[]> {
        return new Promise((resolve) => {
            setTimeout(() => {
                const r0 = Phaser.Math.Between(0, 2);
                const r1 = Phaser.Math.Between(0, 2);
                const r2 = Phaser.Math.Between(0, 2);
                resolve([r0, r1, r2]);
            }, Phaser.Math.Between(0, 500));
        });
    }

    public onFinish(callback: () => void) {
        this._onFinish = callback
        return this;
    }

    public onWin(callback: () => void) {
        this._onWin = callback
        return this;
    }

    public onLoss(callback: () => void) {
        this._onLoss = callback
        return this;
    }
}