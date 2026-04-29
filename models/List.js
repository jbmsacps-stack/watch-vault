import mongoose from "mongoose";

const listSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },

    name: {
      type: String,
      required: true
    },

    type: {
      type: String,
      default: "General"
    },

    color: {
      type: String,
      default: "rgba(255,255,255,0.04)"
    },

    items: [
      {
        name: String,
        done: {
          type: Boolean,
          default: false
        }
      }
    ]
  },
  { timestamps: true }
);

export default mongoose.model("List", listSchema);