import { ImageResponse } from "next/og"
import { OGTemplate } from "@/components/og-template"

export const runtime = "edge"
export const alt =
  "Portfolio - Rafadlis | Web Applications, APIs & Digital Projects"
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = "image/png"

export default async function Image() {
  return new ImageResponse(
    (
      <OGTemplate
        title="Portfolio & Projects"
        subtitle="Web Apps, APIs & Digital Solutions"
        type="project"
        gradient={true}
      />
    ),
    {
      ...size,
    }
  )
}
