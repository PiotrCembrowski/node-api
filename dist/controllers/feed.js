"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPosts = void 0;
const getPosts = (req, res, next) => {
    res
        .status(200)
        .json({ posts: [{ title: "First Post", content: "This is new post" }] });
};
exports.getPosts = getPosts;
