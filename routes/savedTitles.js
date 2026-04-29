import express from "express";
import SavedTitle from "../models/SavedTitle.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", authMiddleware, async (req, res) => {
  const titles = await SavedTitle.find({ userId: req.userId });
  res.json(titles);
});

router.post("/", authMiddleware, async (req, res) => {
  const { imdbId, title, year, type } = req.body;

  const exists = await SavedTitle.findOne({
    userId: req.userId,
    imdbId
  });

  if (exists) {
    return res.status(400).json({ message: "Already Added" });
  }

  const savedTitle = await SavedTitle.create({
    userId: req.userId,
    imdbId,
    title,
    year,
    type
  });

  res.json(savedTitle);
});

router.patch("/:id", authMiddleware, async (req, res) => {
  const updated = await SavedTitle.findOneAndUpdate(
    { _id: req.params.id, userId: req.userId },
    req.body,
    { new: true }
  );

  res.json(updated);
});

router.delete("/:id", authMiddleware, async (req, res) => {
  await SavedTitle.findOneAndDelete({
    _id: req.params.id,
    userId: req.userId
  });

  res.json({ message: "Deleted" });
});

export default router;