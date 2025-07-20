import { blogs } from "@/lib/data-blog"
import { generateBlogPostMetadata } from "@/lib/seo"
import { notFound } from "next/navigation"

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params
  const post = blogs.find((blog) => blog.slug === slug)

  if (!post || post.status !== "published") {
    return {}
  }

  return generateBlogPostMetadata({
    title: post.title,
    description: post.description,
    slug: post.slug,
    publishedAt: post.publishedAt,
    category: post.category,
    tags: [post.category.toLowerCase().replace(" ", "-")],
    excerpt: post.description,
  })
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params
  const post = blogs.find((blog) => blog.slug === slug)

  if (!post || post.status !== "published") {
    notFound()
  }

  const { default: Post } = await import(`../_posts/${slug}.tsx`)
  return <Post />
}

export function generateStaticParams() {
  return blogs
    .filter((blog) => blog.status === "published")
    .map((blog) => ({
      slug: blog.slug,
    }))
}
