import {
  Blog,
  BlogAuthors,
  BlogBackLink,
  BlogContent,
  BlogHeader,
  BlogMeta,
  BlogParagraph,
  BlogTitle,
} from "../_components/blog"
import { authors } from "@/lib/authors"

export default function Welcome() {
  const postAuthors = [{ ...authors["rafadlis"], role: "Writer" }]
  return (
    <Blog>
      <BlogHeader>
        <BlogBackLink href="/blog">Back to Blog</BlogBackLink>
        <BlogMeta>
          <time dateTime="2024-06-08">Saturday, June 8 2024</time>
        </BlogMeta>
        <BlogTitle>Welcome to My Digital Garden</BlogTitle>
        <BlogAuthors authors={postAuthors} />
      </BlogHeader>
      <BlogContent>
        <BlogParagraph>
          Hello there! Welcome to my personal space on the web. I&apos;m R.
          Rahmat Fadli Sadikin, a passionate web developer, UX designer, and a
          self-proclaimed &quot;crafter&quot; of digital experiences. I created
          this blog to share my journey, thoughts, and discoveries with you.
        </BlogParagraph>
        <BlogParagraph>
          Here, you&apos;ll find a collection of my explorations and learnings
          in the vast world of technology and design. I&apos;m driven by the
          core principles of creating applications that are fast, useful, and
          responsive, and I&apos;m excited to dive deeper into these topics and
          share what I uncover.
        </BlogParagraph>
        <BlogParagraph>
          Think of this blog as my digital garden—a place where ideas are
          planted, nurtured, and allowed to grow. It&apos;s where I&apos;ll be
          documenting my process, sharing insights, and hopefully, connecting
          with other curious minds. Whether you&apos;re a fellow developer, a
          designer, or just someone passionate about technology, I hope you find
          something that sparks your interest and adds a little value to your
          day.
        </BlogParagraph>
        <BlogParagraph>
          Thank you for stopping by. I&apos;m genuinely glad you&apos;re here.
        </BlogParagraph>
      </BlogContent>
    </Blog>
  )
}
