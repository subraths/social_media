import { Request, Response } from "express";
import { db } from "../db";

export const getPosts = async (req: Request, res: Response) => {
  const posts = await db.any(
    "select posts.id, title, content, username from posts join users on users.id = creator"
  );
  console.log(posts);
  res.status(200).json(posts);
};

export const createPost = async (req: Request, res: Response) => {
  const { title, content } = req.body;
  const post = await db.quert(
    "update table posts set title = $1, content = $2 where posts.id = $2 returning id, title, content",
    [title, content]
  );
  console.log(post);
};
