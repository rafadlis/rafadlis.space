import type { Metadata, Viewport } from "next"
import "./globals.css"

export const metadata: Metadata = {
  metadataBase: new URL("https://rafadlis.space"),
  title: "Rafadlis — Selected projects",
  description: "Selected web projects by R. Rahmat Fadli Sadikin, software engineer and UX designer: Agrasis, SAPADA, Struk Berhadiah, and Rafadlis.space.",
  alternates: { canonical: "/" },
  openGraph: { type: "website", url: "/", siteName: "Rafadlis", title: "Rafadlis — Selected projects" },
  twitter: { card: "summary", creator: "@rafadlis" },
  icons: { icon: "/favicon.ico", apple: "/apple-touch-icon.png" },
  manifest: "/site.webmanifest",
}
export const viewport: Viewport = { themeColor: "#edf3f8" }
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>
}
