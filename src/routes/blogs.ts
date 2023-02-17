import { Router, Request, Response } from "express";
import { deleteBlog, getBlogs, getBlog, postBlog, updateBlog } from "../controllers/blogs.ctrl";
const router = Router();

router.get("/", getBlogs);

router.get("/:id", getBlog);

router.post("/", postBlog);

router.put("/:id", updateBlog);

router.delete("/:id", deleteBlog);

export { router };