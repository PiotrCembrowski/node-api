"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const feed_1 = require("../controllers/feed");
const express = require("express");
const feedController = require("../controllers/feed");
const router = express.Router();
//GET /feed/posts
router.get("/posts", (req, res, next) => {
    (0, feed_1.getPosts)(req, res, next);
});
exports.default = router;
