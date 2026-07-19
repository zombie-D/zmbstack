import { Router, type IRouter } from "express";
import { eq } from "drizzle-orm";
import { db, blogPostsTable } from "@workspace/db";
import {
  ListBlogPostsResponse,
  GetBlogPostParams,
  GetBlogPostResponse,
} from "@workspace/api-zod";

const router: IRouter = Router();

router.get("/blog", async (_req, res): Promise<void> => {
  const posts = await db
    .select()
    .from(blogPostsTable)
    .where(eq(blogPostsTable.published, true))
    .orderBy(blogPostsTable.publishedAt);
  const serialized = posts.map((p) => ({
    ...p,
    createdAt: p.createdAt instanceof Date ? p.createdAt.toISOString() : p.createdAt,
    publishedAt: p.publishedAt instanceof Date ? p.publishedAt.toISOString() : (p.publishedAt ?? null),
  }));
  res.json(ListBlogPostsResponse.parse(serialized));
});

router.get("/blog/:slug", async (req, res): Promise<void> => {
  const raw = Array.isArray(req.params.slug) ? req.params.slug[0] : req.params.slug;
  const params = GetBlogPostParams.safeParse({ slug: raw });
  if (!params.success) {
    res.status(400).json({ error: params.error.message });
    return;
  }

  const [post] = await db
    .select()
    .from(blogPostsTable)
    .where(eq(blogPostsTable.slug, params.data.slug));

  if (!post || !post.published) {
    res.status(404).json({ error: "Blog post not found" });
    return;
  }

  const serialized = {
    ...post,
    createdAt: post.createdAt instanceof Date ? post.createdAt.toISOString() : post.createdAt,
    publishedAt: post.publishedAt instanceof Date ? post.publishedAt.toISOString() : (post.publishedAt ?? null),
  };
  res.json(GetBlogPostResponse.parse(serialized));
});

export default router;
