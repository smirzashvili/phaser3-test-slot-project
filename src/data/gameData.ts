import AudioManager from "../utils/AudioManager"

export default {
    gameWidth: 800,
    gameHeight: 600,
    isWebpSupported: false,
    soundVolume: 100,
    reelsAmount: 3,
} as {
    gameWidth: number,
    gameHeight: number,
    isWebpSupported: boolean,
    soundVolume: number,
    audioManager: AudioManager,
    reelsAmount: number
}
