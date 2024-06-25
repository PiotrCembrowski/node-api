import { Router, Request, Response, NextFunction } from "express";
import { getPosts } from "../controllers/feed";
const express = require("express");

const feedController = require("../controllers/feed");

const router: Router = express.Router();

//GET /feed/posts
router.get("/posts", (req: Request, res: Response, next: NextFunction) => {
  getPosts(req, res, next);
});

export default router;
