# HTML5 Slot Game (Phaser 3 + TypeScript)

A simple 3-reel, 1-row slot game implemented with **Phaser 3**, **TypeScript**, **GSAP**, and **Spine animations**. This project demonstrates basic slot mechanics, animations, and sound integration.

---

## Game Features

- **Preload screen** with progress bar while assets load.
- **Main game scene** with:
  - Background image.
  - Reels frame and symbols.
  - Spin button.
  - Spine animated object (example: goblin animation).
- **Gameplay:**
  - 3 reels, 1 row, 3 different symbols.
  - Clicking **Spin** starts the reels spinning.
  - Mock server response for spin results (randomized).
  - **Win condition:** all 3 symbols match → triggers win sound and Spine animation.
- **Other features:**
  - Background sound loop.
  - Sound control toggle (on/off).
  - GSAP animations for spinning, bouncing, and other effects.

---

## Tech Stack

- [Phaser 3](https://phaser.io/) – Game engine.
- [TypeScript](https://www.typescriptlang.org/) – Programming language.
- [GSAP](https://greensock.com/gsap/) – Animations.
- [Webpack](https://webpack.js.org/) – Bundling & development server.
- [Spine](http://esotericsoftware.com/) – Character animations.

---

## Installation & Running Locally

1. **Clone the repository**

```bash
git clone https://github.com/your-username/phaser3-slot-game.git
cd phaser3-slot-game
```

2. **Install dependencies**

```bash
npm install
```

3. **Run development server**

```bash
npm run dev
```

4. **Open game in browser**

Navigate to `http://localhost:8080` (or the port Webpack dev server shows in terminal).

---

## Build for Production

```bash
npm run build
```

- Bundled files are located in the `dist/` folder.
- Deploy the `dist` folder to any static hosting service (GitHub Pages, Netlify, Vercel, etc.).

---

## Implementation Notes

- Spin results are **mocked/randomized** to simulate a server response.
- Reels spin using **GSAP tweens** for smooth motion.
- Only **3 symbols** are used for simplicity.
- The game includes a **single row** (can be extended in the future).
- Sound and animation controls are fully integrated.
- GSAP is used for both reel spinning and bounce animations after stopping.

---

## Time Spent

- Approximate implementation time: **8–12 hours**.

---

## Repository URL

[https://github.com/your-username/phaser3-slot-game](https://github.com/your-username/phaser3-slot-game)

---

## Docker Support

If you are familiar with Docker, you can containerize the game:

```bash
# Build the Docker image
docker build -t phaser-slot-game .

# Run the container
docker run -p 8080:8080 phaser-slot-game
```

- The game will be available at `http://localhost:8080`.
