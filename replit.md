# WatchVault

A personal entertainment watchlist manager built with Node.js/Express and MongoDB.

## Tech Stack

- **Backend:** Node.js with Express 5, ES Modules
- **Database:** MongoDB via Mongoose
- **Frontend:** Vanilla JS, HTML5, CSS3 (served as static files from Express)
- **Auth:** JWT + bcryptjs
- **External API:** OMDB API (proxied through backend)

## Architecture

The Express server (`server.js`) serves both the REST API and the static frontend from `client/`. There is no separate build step — the server runs directly with `node server.js`.

- `server.js` — Entry point; serves static files from `client/`, proxies OMDB API, connects to MongoDB
- `client/` — Frontend (HTML, CSS, JS); all API calls use relative paths (`/api/...`)
- `routes/` — Express route handlers (auth, lists, savedTitles)
- `models/` — Mongoose models (User, List, SavedTitle)
- `middleware/` — JWT auth middleware

## Required Secrets

- `MONGO_URI` — MongoDB connection string (e.g. from MongoDB Atlas)
- `API_KEY` — OMDB API key (free at omdbapi.com)

## Running

```
npm start
```

Runs on port 5000 (`0.0.0.0:5000`).

## Deployment

Configured for autoscale deployment. Run command: `node server.js`.
