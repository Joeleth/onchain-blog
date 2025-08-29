import axios from "axios";
import Post from "../models/postModel.js";

export const newsApi = async (req, res, next) => {
  try {
    const allPost = await Post.find().sort({ createdAt: -1 });
    res.status(200).json(allPost);
    console.log(allPost);
  } catch (error) {
    console.log(error);
  }
};

export const createPost = async (req, res, next) => {
  try {
    const newPost = await Post.create({
      image: req.body.image,
      title: req.body.title,
      summary: req.body.summary,
    });
    res.status(200);

    res.status(200).json({ message: "post created successfully" });
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
};


