import Phaser from 'phaser';
import gameConfig from './gameConfig';

export default class Game {
    constructor() {
        const game: Phaser.Game = new Phaser.Game(gameConfig);
    
        // @ts-ignore
        globalThis.__PHASER_GAME__ = game;
    }
}

