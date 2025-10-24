# HTML5 Slot Game (Phaser 3 + TypeScript)

A simple **3-reel, 1-row slot game** implemented with **Phaser 3**, **TypeScript**, **GSAP**, and **Spine animations**. This project demonstrates basic slot mechanics, animations, and sound integration.

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
npm run start
```

4. **Open game in browser**

Navigate to `http://localhost:8080` (or the port Webpack dev server shows in terminal).

---

## Build for Production

```bash
npm run build
```

* Bundled files are located in the `dist/` folder.
* Deploy the `dist` folder to any static hosting service (GitHub Pages, Netlify, Vercel, etc.).

---

## Docker Support

You can containerize the game using Docker:

```bash
# Build Docker image
npm run build:docker
# or
docker build -t phaser-slot-game .

# Run the container
npm run start:docker
# or
docker run -p 8080:80 phaser-slot-game
```

* The game will be available at `http://localhost:8080`.

---

## Time Spent

* Set up project & generate all of the assets/audios using ai: **1.5 hours**.
* Set up file structure: **1 hours**.
* Integrate spine: **1 hours** (because of version conflicts).
* Develop Core Game Logic: **2 hours**.
* Containerize using Docker: **1 hours** (because had not experience of it).
* Refactoring: **0.5 hours**.

* SO TO SUM UP: approximately **7 hours**
