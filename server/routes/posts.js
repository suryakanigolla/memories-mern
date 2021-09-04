import express from "express";

import {
  getPosts,
  createPost,
  updatePost,
  deletePost,
  toggleLikePost,
} from "../controllers/posts.js";

import verifyToken from "../middleware/auth.js";

const router = express.Router();

router.get("/", getPosts);
router.post("/", verifyToken, createPost);
router.patch("/:id/like", verifyToken, toggleLikePost);
router.patch("/:id", verifyToken, updatePost);
router.delete("/:id", verifyToken, deletePost);

export default router;
