import data from "../data/gameData"
import gsap from "gsap"

export default class AudioManager {
    private _scene: Phaser.Scene

    public bgMusic: Phaser.Sound.BaseSound
    public spin: Phaser.Sound.BaseSound
    public win: Phaser.Sound.BaseSound

    constructor(scene: Phaser.Scene) {
        this._scene = scene

        this._scene.sound.pauseOnBlur = false
        this._scene.game.events.on(Phaser.Core.Events.HIDDEN, () => {
            this._scene.sound.pauseAll()
        });
        this._scene.game.events.on(Phaser.Core.Events.VISIBLE, () => {
            this._scene.sound.resumeAll()
        });

        this.setVolume(data.soundVolume)

        this.bgMusic = this._scene.sound.add("bg_music", { loop: true })
        this.spin = this._scene.sound.add("spin")
        this.win = this._scene.sound.add("win")
    }

    public _changeVolumeWithFade(target: Phaser.Sound.BaseSound, fadeDuration: number, toVolume: number): void {
        gsap.to(target, { volume: toVolume, duration: fadeDuration / 1000 });
    }

    public setVolume(volume: number) {
        this._scene.sound.volume = volume / 100
    }
    public setMute(isMuted: boolean) {
        this._scene.sound.mute = isMuted
    }

    public getMute() {
        return this._scene.sound.mute
    }

    public play() {

    }

    public finish(isInstant?: boolean) {

    }

    public playWinMusic() {
        
    }

    public stopWinMusic(audio: Phaser.Sound.BaseSound) {

    }
}