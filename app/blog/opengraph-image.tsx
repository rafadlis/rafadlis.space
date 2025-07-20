import { ImageResponse } from "next/og"
import { OGTemplate } from "@/components/og-template"

export const runtime = "edge"
export const alt =
  "Blog - Rafadlis | Insights on Software Development, UX Design & More"
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = "image/png"

export default async function Image() {
  return new ImageResponse(
    (
      <OGTemplate
        title="Blog & Insights"
        subtitle="Thoughts on Tech, Design & Development"
        type="blog"
      />
    ),
    {
      ...size,
    }
  )
}
