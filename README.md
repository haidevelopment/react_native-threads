<h1 align="center">
  <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.threads.com%2F%40mosseri%2Fpost%2FCuaOfqML2R5%3Fhl%3Dvi&psig=AOvVaw1y2svGxfu4dM7DwPNc4_dI&ust=1752763938344000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCLCOotHQwY4DFQAAAAAdAAAAABAE" alt="Threads Logo" width="120"/>
  <br />
  Threads Clone App
</h1>

<p align="center">
  A beautiful, minimal clone of Meta's Threads app built with React Native, Expo, and modern UI practices.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/react--native-%5E0.73-blue?style=flat-square" />
  <img src="https://img.shields.io/badge/expo-53.0.0-000020?style=flat-square&logo=expo" />
  <img src="https://img.shields.io/github/license/leducngochai24/threads-clone?style=flat-square" />
</p>

---

## 📱 Preview

<p align="center">
  <img src="https://raw.githubusercontent.com/draco-project/assets/main/threads-ui-demo.gif" width="300" alt="App Demo"/>
</p>

---

## 🚀 Features

- 🧵 Thread-style post feed (infinite scroll ready)
- 🖊️ Create, reply, and like threads
- 🔔 Notifications layout (stub)
- 👤 Profile tab with user info
- 🔍 Search tab
- 🧭 Bottom Tab Navigation (React Navigation)
- ⚡ Fast refresh and dev tools via Expo

---

## 🧰 Tech Stack

- **React Native** (Expo SDK 53)
- **Expo Router** (file-based routing)
- **React Navigation**
- **TypeScript**
- **Feather Icons / Vector Icons**
- **React Native Gesture Handler** (optional for future interactions)
- **AsyncStorage** (optional for local caching)

---

## 📂 Folder Structure

```bash
src/
├── app/
│   ├── (tabs)/        # Tab routes
│   │   ├── index.tsx
│   │   ├── search.tsx
│   │   ├── notifications.tsx
│   │   ├── profile.tsx
│   │   └── _layout.tsx
│   └── welcome.tsx    # Optional welcome screen
├── assets/            # Images, fonts, etc.
├── components/        # Reusable UI components (if any)
├── hooks/             # Custom hooks (optional)
