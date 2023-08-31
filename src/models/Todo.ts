import mongoose from "mongoose";

export interface ITodo {
  _id: string;
  title: string;
  isDone: boolean;
  userId: string;
  createdAt: Date;
  updatedAt: Date;
}

const TodoSchema = new mongoose.Schema<ITodo>(
  {
    title: {
      type: String,
      required: [true, "title is required"],
      maxlength: [60, "Name cannot be more than 60 characters"],
    },
    userId: {
      type: String,
      required: [true, "userId is required"],
    },
    isDone: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

export default mongoose.models.Todo || mongoose.model("Todo", TodoSchema);
