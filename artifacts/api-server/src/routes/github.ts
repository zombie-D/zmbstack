import { Router, type IRouter } from "express";
import { ListGithubReposResponse } from "@workspace/api-zod";

const router: IRouter = Router();

router.get("/github/repos", async (req, res): Promise<void> => {
  const token = process.env.GITHUB_TOKEN;

  if (!token) {
    res.status(503).json({ error: "GitHub token not configured. Set the GITHUB_TOKEN secret." });
    return;
  }

  try {
    const response = await fetch("https://api.github.com/user/repos?per_page=100&sort=updated&type=all", {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/vnd.github+json",
        "X-GitHub-Api-Version": "2022-11-28",
      },
    });

    if (!response.ok) {
      req.log.error({ status: response.status }, "GitHub API request failed");
      res.status(502).json({ error: "GitHub API request failed" });
      return;
    }

    const data = await response.json() as Array<{
      name: string;
      full_name: string;
      description: string | null;
      language: string | null;
      updated_at: string;
      topics: string[];
      visibility: string;
    }>;

    const repos = data.map((repo) => ({
      name: repo.name,
      fullName: repo.full_name,
      description: repo.description ?? null,
      language: repo.language ?? null,
      updatedAt: repo.updated_at,
      topics: repo.topics ?? [],
      visibility: repo.visibility,
    }));

    res.json(ListGithubReposResponse.parse(repos));
  } catch (err) {
    req.log.error({ err }, "GitHub API fetch error");
    res.status(502).json({ error: "Failed to reach GitHub API" });
  }
});

export default router;
