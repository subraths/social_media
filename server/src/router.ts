import { Request, Response, Router } from "express";
import { getPosts } from "./controller/posts";

const router = Router();

router
  .route("/posts")
  .get(getPosts)
  .post((req: Request, res: Response) => {
    console.log("git req");
  });
router
  .route("/posts/:id")
  .get((req: Request, res: Response) => {
    console.log("git req");
  })
  .post((req: Request, res: Response) => {
    console.log("git req");
  })
  .patch((req: Request, res: Response) => {
    console.log("git req");
  })
  .delete((req: Request, res: Response) => {
    console.log("git req");
  });

export default router;
