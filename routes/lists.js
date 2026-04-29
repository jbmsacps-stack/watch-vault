import express from "express";
import List from "../models/List.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", authMiddleware, async (req, res) => {
  const lists = await List.find({ userId: req.userId });
  res.json(lists);
});

router.post("/", authMiddleware, async (req, res) => {
  const list = await List.create({
    userId: req.userId,
    name: req.body.name,
    type: req.body.type || "General",
    color: req.body.color || "rgba(255,255,255,0.04)",
    items: req.body.items || []
  });

  res.json(list);
});

router.put("/:id", authMiddleware, async (req, res) => {
  const updatedList = await List.findOneAndUpdate(
    { _id: req.params.id, userId: req.userId },
    req.body,
    { new: true }
  );

  res.json(updatedList);
});

router.delete("/:id", authMiddleware, async (req, res) => {
  await List.findOneAndDelete({
    _id: req.params.id,
    userId: req.userId
  });

  res.json({ message: "List deleted" });
});

export default router;