import express, { Request, Response } from "express";
import { post, Unitpost } from "./feed.interface";
import * as database from "./feed.database";
import { StatusCodes } from "http-status-codes";

export const postRouter = express.Router();

postRouter.get("/posts", async (req: Request, res: Response) => {
  try {
    const allposts = await database.findAll();

    if (!allposts) {
      return res
        .status(StatusCodes.NOT_FOUND)
        .json({ error: `No posts found!` });
    }

    return res
      .status(StatusCodes.OK)
      .json({ total: allposts.length, allposts });
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error });
  }
});

postRouter.get("/post/:id", async (req: Request, res: Response) => {
  try {
    const post = await database.findOne(req.params.id);

    if (!post) {
      return res
        .status(StatusCodes.NOT_FOUND)
        .json({ error: "post does not exist" });
    }

    return res.status(StatusCodes.OK).json({ post });
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error });
  }
});

postRouter.post("/post", async (req: Request, res: Response) => {
  try {
    const { name, price, quantity, image } = req.body;

    if (!name || !price || !quantity || !image) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({ error: `Please provide all the required parameters..` });
    }
    const newpost = await database.create({ ...req.body });
    return res.status(StatusCodes.CREATED).json({ newpost });
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error });
  }
});

postRouter.put("/post/:id", async (req: Request, res: Response) => {
  try {
    const id = req.params.id;

    const newpost = req.body;

    const findpost = await database.findOne(id);

    if (!findpost) {
      return res
        .status(StatusCodes.NOT_FOUND)
        .json({ error: `post does not exist..` });
    }

    const updatepost = await database.update(id, newpost);

    return res.status(StatusCodes.OK).json({ updatepost });
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error });
  }
});

postRouter.delete("/post/:id", async (req: Request, res: Response) => {
  try {
    const getpost = await database.findOne(req.params.id);

    if (!getpost) {
      return res
        .status(StatusCodes.NOT_FOUND)
        .json({ error: `No post with ID ${req.params.id}` });
    }

    await database.remove(req.params.id);

    return res.status(StatusCodes.OK).json({ msg: `post deleted..` });
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error });
  }
});
