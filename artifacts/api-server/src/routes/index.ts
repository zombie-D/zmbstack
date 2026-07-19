import { Router, type IRouter } from "express";
import healthRouter from "./health";
import projectsRouter from "./projects";
import githubRouter from "./github";
import blogRouter from "./blog";
import contactRouter from "./contact";

const router: IRouter = Router();

router.use(healthRouter);
router.use(projectsRouter);
router.use(githubRouter);
router.use(blogRouter);
router.use(contactRouter);

export default router;
