# HTML5 Slot Game (Phaser 3 + TypeScript)

A simple 3-reel, 1-row slot game implemented with **Phaser 3**, **TypeScript**, **GSAP**, and **Spine animations**. This project demonstrates basic slot mechanics, animations, and sound integration.

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

## Time Spent

- Approximate implementation time: **8–12 hours**.

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
