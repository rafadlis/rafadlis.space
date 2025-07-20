import { ImageResponse } from "next/og"
import { OGTemplate } from "@/components/og-template"

export const runtime = "edge"
export const alt = "Rafadlis | Crafter - Software Engineer & UX Designer"
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = "image/png"

export default async function Image() {
  return new ImageResponse(
    (
      <OGTemplate
        title="Rafadlis | Crafter"
        subtitle="Software Engineer & UX Designer"
        type="website"
      />
    ),
    {
      ...size,
    }
  )
}
