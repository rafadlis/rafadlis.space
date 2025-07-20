import { ImageResponse } from "next/og"

import type { ReactElement } from "react"

export interface ImageResponseOptions {
  width?: number
  height?: number
  fonts?: Array<{
    name: string
    data: ArrayBuffer
    style?: "normal" | "italic"
    weight?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900
  }>
}

const fetchFont = async (url: string): Promise<ArrayBuffer | null> => {
  try {
    const response = await fetch(url)
    if (!response.ok) {
      console.warn(
        `Failed to fetch font from ${url}. Status: ${response.status}`
      )
      return null
    }
    return response.arrayBuffer()
  } catch (error) {
    console.warn(`Error fetching font from ${url}:`, error)
    return null
  }
}

export async function createOGImage(
  element: ReactElement,
  size: { width: number; height: number }
) {
  const fontSources = [
    {
      url: "https://fonts.gstatic.com/s/roboto/v32/KFOmCnqEu92Fr1Mu4mxKKTU1Kg.woff2",
      weight: 400,
      name: "Roboto",
      style: "normal",
    },
    {
      url: "https://fonts.gstatic.com/s/roboto/v32/KFOlCnqEu92Fr1MmEU9fBBc4AMP6lQ.woff2",
      weight: 500,
      name: "Roboto",
      style: "normal",
    },
    {
      url: "https://fonts.gstatic.com/s/roboto/v32/KFOlCnqEu92Fr1MmWUlfBBc4AMP6lQ.woff2",
      weight: 700,
      name: "Roboto",
      style: "normal",
    },
    {
      url: "https://fonts.gstatic.com/s/roboto/v32/KFOlCnqEu92Fr1MmYUtfBBc4AMP6lQ.woff2",
      weight: 900,
      name: "Roboto",
      style: "normal",
    },
  ] as const

  const fontPromises = fontSources.map(async (source) => {
    const data = await fetchFont(source.url)
    if (data) {
      return {
        name: source.name,
        data,
        style: source.style,
        weight: source.weight,
      }
    }
    return null
  })

  const settledFonts = await Promise.all(fontPromises)
  const validFonts: Exclude<(typeof settledFonts)[number], null>[] = []
  for (const font of settledFonts) {
    if (font) {
      validFonts.push(font)
    }
  }

  const options: ImageResponseOptions = {
    ...size,
    fonts: validFonts,
  }

  return new ImageResponse(element, options)
}
