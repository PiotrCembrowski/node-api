import { Request, Response, NextFunction } from "express";

export const getPosts = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  res
    .status(200)
    .json({ posts: [{ title: "First Post", content: "This is new post" }] });
};
