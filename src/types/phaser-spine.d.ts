import 'phaser';

declare module 'phaser' {
  interface LoaderPlugin {
    spine(
      key: string,
      jsonURL: string,
      atlasURL: string,
      preMultipliedAlpha?: boolean
    ): void;
  }

  namespace GameObjects {
    interface GameObjectFactory {
      spine(
        x: number,
        y: number,
        key: string,
        animationName?: string,
        loop?: boolean
      ): Phaser.GameObjects.GameObject;
    }
  }
}