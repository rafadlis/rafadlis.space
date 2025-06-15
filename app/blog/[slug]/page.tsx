import { blogs } from "@/lib/data-blog"

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
