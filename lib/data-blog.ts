export type BlogStatus = "published" | "draft" | "archived"

export type BlogCategory =
  | "App Development"
  | "Data Science"
  | "Statistics"
  | "Accounting"
  | "Tax"
  | "Personal"

export type Blog = {
  slug: string
  title: string
  description: string
  publishedAt: Date
  status: BlogStatus
  category: BlogCategory
}

export const blogs: Blog[] = [
  {
    slug: "welcome",
    title: "Welcome to My Pool of Thought",
    description:
      'Hello there! Welcome to my personal space on the web. I\'m R. Rahmat Fadli Sadikin, a passionate web developer, UX designer, and a self-proclaimed "crafter" of digital experiences. I created this blog to share my journey, thoughts, and discoveries with you.',
    publishedAt: new Date("2024-06-08"),
    status: "published",
    category: "Personal",
  },
  {
    slug: "power-bi-untuk-pemula",
    title: "Power BI untuk Pemula",
    description:
      "Pelajari bagaimana memanfaatkan Power BI untuk membuat dashboard yang interaktif dan bisa dibagikan secara online.",
    publishedAt: new Date("2024-07-27"),
    status: "published",
    category: "Data Science",
  },
]

export function getBlogBySlug(slug: string) {
  return blogs.find((blog) => blog.slug === slug)
}
