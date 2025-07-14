import { authors } from "@/lib/authors"
import {
  Blog,
  BlogAuthors,
  BlogCode,
  BlogContent,
  BlogH2,
  BlogHeader,
  BlogMeta,
  BlogParagraph,
  BlogReferences,
  BlogTitle,
  BlogBackLink,
} from "../_components/blog"
import { blogs } from "@/lib/data-blog"

function AnnoyingRedirectFunctionInNextJsPage() {
  const postAuthors = [{ ...authors["rafadlis"], role: "Writer" }]
  const post = blogs.find(
    (blog) => blog.slug === "annoying-redirect-function-in-nextjs"
  )
  const references = [
    {
      title: "Next.js API Reference: redirect",
      url: "https://nextjs.org/docs/app/api-reference/functions/redirect",
    },
    {
      title: "Next.js Documentation: Redirecting",
      url: "https://nextjs.org/docs/app/building-your-application/routing/redirecting",
    },
  ]

  if (!post) {
    return null
  }

  return (
    <Blog>
      <BlogHeader>
        <BlogBackLink href="/blog">Back to Blog</BlogBackLink>
        <BlogMeta date={post?.publishedAt} />
        <BlogTitle>{post?.title}</BlogTitle>
        <BlogAuthors authors={postAuthors} />
      </BlogHeader>
      <BlogContent>
        <BlogParagraph>
          If you&apos;ve spent time with <BlogCode>Next.js</BlogCode>,
          especially diving into <BlogCode>Server Components</BlogCode> and{" "}
          <BlogCode>Server Actions</BlogCode>, you&apos;ve likely met the{" "}
          <BlogCode>redirect()</BlogCode> function from{" "}
          <BlogCode>next/navigation</BlogCode>. It&apos;s a useful tool for
          sending users to new pages, but it comes with a catch that can be
          incredibly frustrating. It can throw an error so vague it sends you
          down a rabbit hole of debugging. I spent days dealing with this,
          questioning my authentication logic, and exploring every alternative I
          could think of. The solution? Almost frustratingly simple: swapping{" "}
          <BlogCode>redirect()</BlogCode> for{" "}
          <BlogCode>permanentRedirect()</BlogCode>. But that just leaves one big
          question: why on earth does that work?
        </BlogParagraph>
        <BlogH2>Redirect vs Permanent Redirect</BlogH2>
        <BlogParagraph>
          At first glance, the difference seems simple.{" "}
          <BlogCode>redirect</BlogCode> is for temporary moves, and{" "}
          <BlogCode>permanentRedirect</BlogCode> is for when a page has moved
          for good. But the real distinction lies in the HTTP status codes they
          send back to the browser, which has a big impact on how your browser
          behaves.
        </BlogParagraph>
        <BlogParagraph>
          The <BlogCode>redirect()</BlogCode> function usually sends a{" "}
          <BlogCode>307 Temporary Redirect</BlogCode>. If you&apos;re using it
          inside a Server Action, however, it sends a{" "}
          <BlogCode>303 See Other</BlogCode>. On the other hand,{" "}
          <BlogCode>permanentRedirect()</BlogCode> always sends a{" "}
          <BlogCode>308 Permanent Redirect</BlogCode>.
        </BlogParagraph>
        <BlogParagraph>
          So what&apos;s the big deal with these numbers? It&apos;s all about
          what happens to your request method (like <BlogCode>GET</BlogCode> or{" "}
          <BlogCode>POST</BlogCode>). With a <BlogCode>307</BlogCode> or{" "}
          <BlogCode>308</BlogCode> redirect, your browser is told to use the
          same method for the new request. If it was a <BlogCode>POST</BlogCode>{" "}
          request, it&apos;ll make another <BlogCode>POST</BlogCode> to the new
          URL. But with a <BlogCode>303</BlogCode> redirect, the browser is
          explicitly told to switch to a <BlogCode>GET</BlogCode> request for
          the new URL. This is a common pattern to prevent things like
          re-submitting a form if the user refreshes the page after the form
          submission.
        </BlogParagraph>
        <BlogParagraph>
          This difference is likely the root of the problem mentioned earlier.
          If you have logic on the target page that expects a{" "}
          <BlogCode>POST</BlogCode> request (maybe to process some data), but{" "}
          <BlogCode>redirect()</BlogCode> from a Server Action is forcing the
          browser to make a <BlogCode>GET</BlogCode> request instead and
          something miss, things will break. By switching to{" "}
          <BlogCode>permanentRedirect()</BlogCode>, you ensure the request
          method is preserved, and your <BlogCode>POST</BlogCode> request lands
          as a <BlogCode>POST</BlogCode>, just as you intended.
        </BlogParagraph>
        <BlogH2>Conclusion</BlogH2>
        <BlogParagraph>
          While I&apos;m still digging into the finer details of why this
          solution is so effective, I wanted to document my findings. This post
          serves as a note for my future self and, hopefully, a helpful guide
          for anyone else who runs into this frustrating issue. If you&apos;ve
          been dealing with unexpected redirect behavior in Next.js, I hope this
          explanation saves you some time and debugging headaches.
        </BlogParagraph>
        <BlogReferences references={references} />
      </BlogContent>
    </Blog>
  )
}

export default AnnoyingRedirectFunctionInNextJsPage
