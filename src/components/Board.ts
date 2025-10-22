import data from '../data/gameData';
import Reel from './Reel';

export default class Board extends Phaser.GameObjects.Container {
    private _scene: Phaser.Scene;
    private _board!: Phaser.GameObjects.Image;
    private _reels: Array<Reel> = [];

    constructor(scene: Phaser.Scene, x: number, y: number) {
        super(scene, x, y);

        this._scene = scene;

        this._draw()
    }

    private _draw() {
        this._board = this._scene.add.image(0, 0, 'board')
        this._board.setDisplaySize(data.gameWidth/1.2, this._board.height * (data.gameWidth/1.2 * 1/this._board.width))
        this.add(this._board);

        for(let i = 0; i < data.reelsAmount; i++){
            const startOffSetX = this._board.displayWidth/6
            const x = startOffSetX + -this._board.displayWidth/2 + this._board.displayWidth * i/3
            const reel = new Reel(this._scene, x, 0)
            this._reels.push(reel)
            this.add(reel)

            reel.fillWithDefaults();
        }
    }

    public async play() {
        const result = await this.mockServerSpin();
        
        const durationPerReel = [1.2, 1.4, 1.6]
        for(let i = 0; i < this._reels.length; i++){
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
            }, 500 + Phaser.Math.Between(0, 500));
        });
    }
}