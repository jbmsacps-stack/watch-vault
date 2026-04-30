<div align="center">
<<<<<<< HEAD
<img src="https://i.postimg.cc/kGgDBffg/Chat-GPT-Image-Apr-28-2026-11-48-12-PM.png" alt="WatchVault Logo" width="150" />
=======

<img src="https://i.postimg.cc/kGgDBffg/Chat-GPT-Image-Apr-28-2026-11-48-12-PM.png" alt="WatchVault Logo" width="120"/>
>>>>>>> 4a44557 (Enhance README with project details and features)

# WatchVault

**Build your personal watch vault.**  
Create lists for everything you want to watch — Movies, Series, Anime.

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Visit%20App-brightgreen?style=for-the-badge)](https://watch-vault--joshuabaskar106.replit.app/)
<<<<<<< HEAD
[![Node.js](https://img.shields.io/badge/Node.js-Backend-339933?style=for-the-badge&logo=node.js)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Database-47A248?style=for-the-badge&logo=mongodb)](https://www.mongodb.com/)

[![HTML](https://img.shields.io/badge/HTML-Frontend-E34F26?style=for-the-badge&logo=html5)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS](https://img.shields.io/badge/CSS-Styling-1572B6?style=for-the-badge&logo=css3)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-Logic-F7DF1E?style=for-the-badge&logo=javascript)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

🌐 **Live App:** <a href="https://watch-vault--joshuabaskar106.replit.app/" target="_blank" rel="noopener noreferrer">Open WatchVault</a>
=======
[![License: MIT](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)](LICENSE)
[![Node.js](https://img.shields.io/badge/Node.js-Backend-339933?style=for-the-badge&logo=node.js)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Database-47A248?style=for-the-badge&logo=mongodb)](https://www.mongodb.com/)
[![Express](https://img.shields.io/badge/Express-API-000000?style=for-the-badge&logo=express)](https://expressjs.com/)

🌐 **Website:** [your-website-link-here.com](https://your-website-link-here.com)
>>>>>>> 4a44557 (Enhance README with project details and features)

</div>

---

<<<<<<< HEAD
## About

WatchVault is a full-stack web application for organizing personal entertainment. Rather than passive logging, it gives users full control through custom lists and flexible collection management — whether queuing a weekend watchlist, tracking series progress, or sorting anime by season.

>WatchVault is not a streaming platform. It is a personal organization tool.

This project was built as a portfolio piece, developed primarily through my own problem-solving and technical skills. The entire application — frontend, backend, database, authentication, and deployment — was completed independently within a 12-hour build window.

The frontend was fully designed and implemented by me using vanilla HTML, CSS, and JavaScript, without relying on any frameworks or UI libraries. ChatGPT was used only as a supplementary reference tool for clarification and guidance, not for generating the core implementation.
---

## Screenshots

<div align="center">

### Home Page

<img src="screenshots/home1.png" alt="WatchVault Home Page Screenshot" width="100%" />

<br><br>

### Explore Page

<img src="screenshots/explore1.png" alt="WatchVault Explore Page Screenshot" width="100%" />

<br><br>

### My List Page

<img src="screenshots/mylist1.png" alt="WatchVault My List Page Screenshot" width="100%" />

</div>

## Features

**Content Discovery**
- Search movies, series, and anime via the OMDb API
- Look up titles by keyword or IMDb ID
- Browse trending content from the homepage

**List Management**
- Create and name custom collections
- Add and remove titles freely across any list
- Track episode progress with season and episode details per title

**Authentication**
- User registration and login
- Stateless sessions via JSON Web Tokens (JWT)

**Data Persistence**
- MongoDB via Mongoose ODM
- Separate schemas for users, lists, and saved titles
- All data scoped per user

---

## Tech Stack
=======
## 📖 About

WatchVault is a full-stack web application for organizing your entertainment — not just tracking it. Rather than passive logging, WatchVault puts you in control through user-defined lists and flexible collection management.

Whether you're queuing up a weekend watchlist, tracking where you left off in a series, or organizing anime by season, WatchVault adapts to the way you actually watch.

> **Not a streaming platform.** WatchVault is designed purely for organizing and managing entertainment lists.

---

## 📸 Screenshots

> _Add your screenshots below by replacing the placeholder paths._

| Home | Explore | My List |
|------|---------|---------|
| ![Home](screenshots/home.png) | ![Explore](screenshots/explore.png) | ![MyList](screenshots/mylist.png) |

---

## ✨ Features

### 🔍 Content Discovery
- Search movies, series, and anime via the **OMDb API**
- Look up titles by keyword or IMDb ID
- Browse trending content directly from the homepage

### 📋 List Management
- Create fully custom collections (e.g. *Weekend Watchlist*, *Anime Queue*, *Must Rewatch*)
- Add and remove titles freely across any list
- Track episode progress for series and anime — store season and episode details so you know exactly where you stopped

### 🔐 Authentication
- User registration and login
- Secure, stateless sessions via **JWT (JSON Web Tokens)**

### 🗄️ Persistence
- MongoDB integration via **Mongoose**
- Separate schemas for users, lists, and titles
- Per-user structured storage

---

## 🛠️ Tech Stack
>>>>>>> 4a44557 (Enhance README with project details and features)

| Layer | Technology |
|-------|-----------|
| Frontend | HTML, CSS, Vanilla JavaScript |
| Backend | Node.js, Express.js |
| Database | MongoDB (Mongoose ODM) |
| Auth | JSON Web Tokens (JWT) |
| External API | OMDb API |
| Hosting | Replit |

<<<<<<< HEAD
The frontend uses no frameworks or libraries by design — a deliberate choice to demonstrate proficiency with core web fundamentals.

---

## Architecture

```
Client (HTML / CSS / JS)
       ↓
  Express REST API
       ↓
  Business Logic Layer
       ↓
  MongoDB via Mongoose
=======
---

## 🏗️ System Architecture

```
Client (HTML / CSS / JS)
         ↓
    Express REST API
         ↓
    Business Logic Layer
         ↓
    MongoDB via Mongoose
>>>>>>> 4a44557 (Enhance README with project details and features)
```

---

<<<<<<< HEAD
## Project Structure
=======
## 📁 Project Structure
>>>>>>> 4a44557 (Enhance README with project details and features)

```
watch-vault/
│
├── routes/
│   ├── auth.js          # Register & login endpoints
│   ├── lists.js         # List CRUD operations
│   └── savedTitles.js   # Title save/remove logic
│
<<<<<<< HEAD
├── models/              # Mongoose schemas — User, List, Title
├── server.js            # Entry point
=======
├── models/              # Mongoose schemas (User, List, Title)
├── server.js            # App entry point
>>>>>>> 4a44557 (Enhance README with project details and features)
├── .env                 # Environment variables (not committed)
├── package.json
└── README.md
```

---

<<<<<<< HEAD
## Getting Started

**Prerequisites**
- Node.js v18+
- MongoDB Atlas account or local MongoDB instance
- OMDb API key — [free registration here](https://www.omdbapi.com/apikey.aspx)

**1. Clone the repository**
=======
## 🚀 Getting Started

### Prerequisites
- Node.js v18+
- MongoDB Atlas account (or local MongoDB)
- OMDb API key — [get one free here](https://www.omdbapi.com/apikey.aspx)

### 1. Clone the Repository
>>>>>>> 4a44557 (Enhance README with project details and features)

```bash
git clone https://github.com/jbmsacps-stack/watch-vault.git
cd watch-vault
```

<<<<<<< HEAD
**2. Install dependencies**
=======
### 2. Install Dependencies
>>>>>>> 4a44557 (Enhance README with project details and features)

```bash
npm install
```

<<<<<<< HEAD
**3. Configure environment variables**
=======
### 3. Configure Environment Variables
>>>>>>> 4a44557 (Enhance README with project details and features)

Create a `.env` file in the project root:

```env
MONGO_URI=your_mongodb_connection_string
API_KEY=your_omdb_api_key
JWT_SECRET=your_jwt_secret_key
```

<<<<<<< HEAD
**4. Start the server**
=======
### 4. Run the Application
>>>>>>> 4a44557 (Enhance README with project details and features)

```bash
node server.js
```

<<<<<<< HEAD
Visit `http://localhost:5000`

---

## API Reference
=======
Visit: [http://localhost:5000](http://localhost:5000)

---

## 📡 API Reference
>>>>>>> 4a44557 (Enhance README with project details and features)

### Authentication

| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/api/auth/register` | Register a new user |
| `POST` | `/api/auth/login` | Login and receive JWT |

### Lists

| Method | Endpoint | Description |
|--------|----------|-------------|
<<<<<<< HEAD
| `GET` | `/api/lists` | Get all lists for the authenticated user |
=======
| `GET` | `/api/lists` | Fetch all lists for authenticated user |
>>>>>>> 4a44557 (Enhance README with project details and features)
| `POST` | `/api/lists` | Create a new list |
| `DELETE` | `/api/lists/:id` | Delete a list by ID |

### Saved Titles

| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/api/saved` | Save a title to a list |
| `DELETE` | `/api/saved/:id` | Remove a title from a list |

### Search

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/search?q=keyword` | Search titles by keyword |
<<<<<<< HEAD
| `GET` | `/api/search?id=imdbID` | Fetch a title by IMDb ID |

---

## Roadmap

- [ ] Episode-level progress tracking
- [ ] Automated trending content updates
- [ ] UI transitions and animation improvements
- [ ] Role-based access control
- [ ] Production deployment via Docker or VPS
=======
| `GET` | `/api/search?id=imdbID` | Fetch title by IMDb ID |

---

## 🎨 Design Philosophy

WatchVault was built with a deliberate separation between **content discovery** and **user data**, keeping the experience flexible and free of rigid tracking models.

- **API-first architecture** — clean REST endpoints designed for scalability
- **Stateless authentication** — JWT ensures no server-side session storage
- **Minimal, focused UI** — backend functionality takes priority; the interface stays out of the way
- **Separation of concerns** — Explore and Lists are architecturally independent

---

## 🔭 Roadmap

- [ ] Episode-level tracking for series and anime
- [ ] Automated trending content updates
- [ ] Improved UI transitions and animations
- [ ] Role-based access control (Admin / User)
- [ ] Production-grade deployment (Docker / VPS)
>>>>>>> 4a44557 (Enhance README with project details and features)
- [ ] Public list sharing

---

<<<<<<< HEAD
## Author

**Joshua Baskar** — Aspiring Full-Stack Developer

📬 jbmsacps@gmail.com  
🔗 [GitHub](https://github.com/jbmsacps-stack) · [LinkedIn](https://www.linkedin.com/in/joshua-baskar-2b4a88381/) · [Live App](https://watch-vault--joshuabaskar106.replit.app/)

---

## Copyright & Usage Terms

**WatchVault** · Copyright © 2026 Joshua Baskar · All rights reserved.

### Permitted Uses

- Viewing and studying the source code for personal learning
- Referencing the project in non-commercial academic or portfolio work, with attribution
- Private forking for personal experimentation
- Sharing links to this repository or the live application with proper credit

### Restricted Uses

The following require explicit written permission from the author:

- Publicly publishing this project or any substantial portion of its code
- Monetizing this project in any form — paid access, commercial integration, ad revenue, etc.
- Redistributing modified or unmodified versions under a different name or identity
- Claiming authorship or ownership of any part of this project

Commercial or revenue-generating use may be discussed. Licensing arrangements, including royalty terms, are open to reasonable negotiation.

📬 Contact: jbmsacps@gmail.com

### Fair Use

Personal education, commentary, criticism, and non-commercial research are understood to fall within fair use and are welcomed.

### Similarity Disclaimer

WatchVault was developed independently. Any resemblance to existing products, services, or applications in name, design, or functionality is coincidental and unintentional.

### Usage Summary

| Use Case | Status |
|----------|--------|
| Personal learning & study | ✅ Permitted |
| Private forking & experimentation | ✅ Permitted |
| Sharing with attribution | ✅ Permitted |
| Academic reference with credit | ✅ Permitted |
| Public publishing | ⚠️ Permission required |
| Commercial or monetized use | ⚠️ Permission + licensing required |
| Redistribution under a different name | ❌ Not permitted |
| Claiming ownership | ❌ Not permitted |

Unauthorized use may be subject to applicable intellectual property and copyright law. The author reserves the right to pursue all available remedies in response to violations.
=======
## 📄 License

This project is licensed under the [MIT License](LICENSE).

All movies, series, anime titles, images, and related content belong to their respective copyright holders. WatchVault does not host or stream any media.

---

## 👤 Author

**Joshua Baskar**  
🔗 [GitHub](https://github.com/jbmsacps-stack) · [LinkedIn](https://www.linkedin.com/in/joshua-baskar-2b4a88381/) · [Website](https://your-website-link-here.com)  
📬 jbmsacps@gmail.com
>>>>>>> 4a44557 (Enhance README with project details and features)

---

<div align="center">

<<<<<<< HEAD
*Last updated: April 2026 · Created by Joshua Baskar*

⭐ If you found this useful, starring it is appreciated.
=======
⭐ If you find this project useful, consider giving it a star!
>>>>>>> 4a44557 (Enhance README with project details and features)

</div>
