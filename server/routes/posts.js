import { Router } from "express";
import {
  getPost,
  addPost,
  getPosts,
  deletePost,
  updatePost,
} from "../controllers/post.js";

const router = Router();

router.get("/", getPosts);
router.get("/:id", getPost);
router.post("/", addPost);
router.delete("/:id", deletePost);
router.patch("/:id", updatePost);

export default router;
