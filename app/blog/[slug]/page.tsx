import { blogs, getBlogBySlug } from "@/lib/data-blog"
import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { authors } from "@/lib/authors"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const blog = getBlogBySlug(slug)

  if (!blog) {
    notFound()
  }

  const blogAuthors = [
    { name: authors.rafadlis.name, url: authors.rafadlis.url },
  ]

  return {
    title: blog.title,
    description: blog.description,
    authors: blogAuthors,
    openGraph: {
      title: blog.title,
      description: blog.description,
      type: "article",
      url: `https://rafadlis.space/blog/${blog.slug}`,
      authors: blogAuthors.map((author) => author.name),
    },
    twitter: {
      card: "summary_large_image",
      title: blog.title,
      description: blog.description,
      creator: "@rafadlis",
    },
  }
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const { default: Post } = await import(`../_posts/${slug}.tsx`)
  return <Post />
}

export function generateStaticParams() {
  return blogs.map((blog) => ({
    slug: blog.slug,
  }))
}
