import express from "express";

import {
  getPosts,
  createPost,
  updatePost,
  deletePost,
  toggleLikePost,
} from "../controllers/posts.js";

const router = express.Router();

router.get("/", getPosts);
router.post("/", createPost);
router.patch("/:id/like", toggleLikePost);
router.patch("/:id", updatePost);
router.delete("/:id", deletePost);

export default router;
