import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
  {
    image: {
      type: String,
      required: true,
    },
    title: { type: String },
    summary: { type: String, required: true },
  },
  { timestamps: true }
);

const Post = mongoose.model("post", postSchema);
export default Post;
