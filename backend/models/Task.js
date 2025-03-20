import mongoose from "mongoose";

const taskSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: String,
    status: {
      type: String,
      enum: ["pending", "completed"],
      default: "pending",
    },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    subtasks: [{ type: mongoose.Schema.Types.ObjectId, ref: "Task" }],
    comments: [{ type: String }],
  },
  { timestamps: true }
);

export default mongoose.model("Task", taskSchema);
