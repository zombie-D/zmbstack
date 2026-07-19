import { pgTable, serial, text, boolean, integer, timestamp, jsonb } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod/v4";

export const projectsTable = pgTable("projects", {
  id: serial("id").primaryKey(),
  slug: text("slug").notNull().unique(),
  name: text("name").notNull(),
  tagline: text("tagline").notNull(),
  description: text("description").notNull(),
  problem: text("problem").notNull(),
  technologies: jsonb("technologies").$type<string[]>().notNull().default([]),
  architecture: text("architecture"),
  features: jsonb("features").$type<string[]>().notNull().default([]),
  challenges: jsonb("challenges").$type<{ title: string; description: string; solution: string }[]>().notNull().default([]),
  status: text("status", { enum: ["completed", "in-progress", "archived"] }).notNull().default("completed"),
  role: text("role").notNull(),
  duration: text("duration").notNull(),
  screenshots: jsonb("screenshots").$type<string[]>().notNull().default([]),
  videoUrl: text("video_url"),
  githubRepo: text("github_repo"),
  featured: boolean("featured").notNull().default(false),
  order: integer("order").notNull().default(0),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
});

export const insertProjectSchema = createInsertSchema(projectsTable).omit({ id: true, createdAt: true });
export type InsertProject = z.infer<typeof insertProjectSchema>;
export type Project = typeof projectsTable.$inferSelect;
