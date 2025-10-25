import type Button from '../components/Button';
import type Phaser from 'phaser';

export interface GameData {
  gameWidth: number;
  gameHeight: number;
  reelsAmount: number;
  starterSymbolsData: number[];
  soundVolume: number;
  audioManager: AudioManager;
  isWebpSupported?: boolean;
}

export interface BoardCallbacks {
  onFinish: (isWin: boolean) => void;
}

export interface ControlPanelCallbacks {
    onPlay: () => void;
}

export type SpinResult = Array<number>;

export interface ButtonFrames {
  defaultFrame: string;
  disableFrame?: string;
}