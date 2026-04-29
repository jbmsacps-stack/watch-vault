import express from "express";
import fetch from "node-fetch";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";

import authRoutes from "./routes/auth.js";
import listRoutes from "./routes/lists.js";
import savedTitleRoutes from "./routes/savedTitles.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("MongoDB connection error:", err));

app.get("/api/search", async (req, res) => {
  const query = req.query.q;
  const id = req.query.id;

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
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
