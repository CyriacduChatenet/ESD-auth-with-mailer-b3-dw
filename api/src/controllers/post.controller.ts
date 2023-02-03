import { Request, Response } from "express";
import Post from "../models/post.model";

export class PostController {
  public getAllPosts = async (req: Request, res: Response) => {
    const posts = await Post.find();
    return res.json(posts);
  };
}
