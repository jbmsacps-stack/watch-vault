import express from "express";
import fetch from "node-fetch";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

import authRoutes from "./routes/auth.js";
import listRoutes from "./routes/lists.js";
import savedTitleRoutes from "./routes/savedTitles.js";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

app.use(cors());
app.use(express.json());

app.use(express.static(join(__dirname, "client")));

if (process.env.MONGO_URI) {
  mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.log("MongoDB connection error:", err));
} else {
  console.warn("MONGO_URI not set — database features will not work");
}

app.get("/api/search", async (req, res) => {
  const query = req.query.q;
  const id = req.query.id;

  if (!process.env.API_KEY) {
    return res.status(500).json({ Response: "False", Error: "API key not configured" });
  }

  let url = "";

  if (id) {
    url = `https://www.omdbapi.com/?apikey=${process.env.API_KEY}&i=${id}`;
  } else {
    url = `https://www.omdbapi.com/?apikey=${process.env.API_KEY}&s=${encodeURIComponent(query)}`;
  }

  try {
    const response = await fetch(url);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).json({ Response: "False", Error: "Server error" });
  }
});

app.use("/api/auth", authRoutes);
app.use("/api/lists", listRoutes);
app.use("/api/saved-titles", savedTitleRoutes);

app.get("/{*path}", (req, res) => {
  res.sendFile(join(__dirname, "client", "index.html"));
});

app.listen(5000, "0.0.0.0", () => console.log("Server running on http://0.0.0.0:5000"));
