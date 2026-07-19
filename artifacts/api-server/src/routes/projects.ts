import { Router, type IRouter } from "express";
import { eq } from "drizzle-orm";
import { db, projectsTable } from "@workspace/db";
import {
  ListProjectsResponse,
  GetProjectParams,
  GetProjectResponse,
} from "@workspace/api-zod";

const router: IRouter = Router();

router.get("/projects", async (_req, res): Promise<void> => {
  const projects = await db
    .select()
    .from(projectsTable)
    .orderBy(projectsTable.order);
  const serialized = projects.map((p) => ({
    ...p,
    createdAt: p.createdAt instanceof Date ? p.createdAt.toISOString() : p.createdAt,
    architecture: p.architecture ?? null,
    videoUrl: p.videoUrl ?? null,
    githubRepo: p.githubRepo ?? null,
  }));
  res.json(ListProjectsResponse.parse(serialized));
});

router.get("/projects/:slug", async (req, res): Promise<void> => {
  const raw = Array.isArray(req.params.slug) ? req.params.slug[0] : req.params.slug;
  const params = GetProjectParams.safeParse({ slug: raw });
  if (!params.success) {
    res.status(400).json({ error: params.error.message });
    return;
  }

  const [project] = await db
    .select()
    .from(projectsTable)
    .where(eq(projectsTable.slug, params.data.slug));

  if (!project) {
    res.status(404).json({ error: "Project not found" });
    return;
  }

  const serialized = {
    ...project,
    createdAt: project.createdAt instanceof Date ? project.createdAt.toISOString() : project.createdAt,
    architecture: project.architecture ?? null,
    videoUrl: project.videoUrl ?? null,
    githubRepo: project.githubRepo ?? null,
  };
  res.json(GetProjectResponse.parse(serialized));
});

export default router;
