import { MetadataRoute } from "next"
import { blogs } from "@/lib/data-blog"
import { projects } from "@/lib/data-project"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://rafadlis.space"

  // Static pages with high priority
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/project`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/playground`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/HRMS`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
  ]

  // Blog posts
  const blogPages: MetadataRoute.Sitemap = blogs
    .filter((blog) => blog.status === "published")
    .map((blog) => ({
      url: `${baseUrl}/blog/${blog.slug}`,
      lastModified: blog.publishedAt,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    }))

  // Project pages
  const projectPages: MetadataRoute.Sitemap = projects
    .filter(
      (project) =>
        !project.isPrivate &&
        (project.status === "completed" ||
          project.status === "in-progress" ||
          project.status === "growing")
    )
    .map((project) => ({
      url: `${baseUrl}/project/${project.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    }))

  return [...staticPages, ...blogPages, ...projectPages]
}
