import mongoose from "mongoose";

const savedTitleSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },

    imdbId: {
      type: String,
      required: true
    },

    title: {
      type: String,
      required: true
    },

    year: String,
    type: String,

    completed: {
      type: Boolean,
      default: false
    }
  },
  { timestamps: true }
);

export default mongoose.model("SavedTitle", savedTitleSchema);