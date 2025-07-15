// Simple data model without React dependencies
export type ProjectStatus =
  | "completed"
  | "in-progress"
  | "planned"
  | "dropped"
  | "growing"

export type ProjectCategory = "Web App" | "Website" | "Web API"

export type Project = {
  slug: string
  name: string
  urls?: {
    prod?: string
    demo?: string
  }
  version: string
  isPrivate: boolean
  isOpenSource: boolean
  description: string
  category: ProjectCategory
  tech: Array<{
    name: string
    version?: string
    purpose?: string
  }>
  status: ProjectStatus
}

export const projects: Project[] = [
  {
    slug: "mauscan-online",
    name: "mauscan.online",
    version: "v0.0.0-alpha",
    isPrivate: false,
    isOpenSource: false,
    description:
      "A powerful API for scanning and managing specific documents like Identity Cards, featuring reliable AI-powered OCR for a cost-effective and streamlined workflow. It is complemented by a web application for easy access and integration.",
    category: "Web App",
    tech: [
      { name: "Next.js 15", version: "15^", purpose: "Framework" },
      { name: "TypeScript", version: "5^", purpose: "Language" },
      { name: "Tailwind CSS", version: "4^", purpose: "Styling" },
      { name: "Shadcn UI", purpose: "Component Library" },
      { name: "Supabase", purpose: "Database, Auth, and Storage" },
      { name: "Drizzle ORM", version: "0.42.0", purpose: "ORM" },
      { name: "Tanstack Query", version: "5^", purpose: "Data Fetching" },
    ],
    status: "in-progress",
  },
  {
    slug: "tirtakencana-co-id",
    name: "tirtakencana.co.id",
    urls: {
      prod: "https://tirtakencana.co.id",
    },
    version: "0.1.0",
    isPrivate: false,
    isOpenSource: false,
    description:
      "Primary website for Tirtakencana as a hotel and resort company.",
    category: "Website",
    tech: [
      { name: "Next.js 15", version: "15^", purpose: "Framework" },
      { name: "TypeScript", version: "5^", purpose: "Language" },
      { name: "Motion", version: "-", purpose: "Animation" },
      { name: "animejs", version: "4^", purpose: "Advance Animation" },
      { name: "Tailwind CSS", version: "4^", purpose: "Styling" },
      { name: "Shadcn UI", purpose: "Component Library" },
    ],
    status: "in-progress",
  },
  {
    slug: "tirtakencana-app",
    name: "app.tirtakencana.co.id",
    urls: {
      prod: "https://app.tirtakencana.co.id",
      demo: "https://hrms-demo.rafadlis.space",
    },
    version: "v1.0.0",
    isPrivate: false,
    isOpenSource: false,
    description:
      "A comprehensive Hotel and Resort Management System designed to streamline operations from Front Office to Accounting. Features include reservation management, guest services, room allocation, billing, and financial reporting.",
    category: "Web App",
    tech: [
      { name: "Next.js 15", version: "15^", purpose: "Framework" },
      { name: "TypeScript", version: "5^", purpose: "Language" },
      { name: "Anime JS", version: "4^", purpose: "Advance Animation" },
      { name: "Tailwind CSS", version: "4^", purpose: "Styling" },
      { name: "Shadcn UI", purpose: "Component Library" },
      { name: "Supabase", purpose: "Database, Auth, and Storage" },
      { name: "Drizzle ORM", version: "0.42.0", purpose: "ORM" },
      { name: "Tanstack Query", version: "5^", purpose: "Data Fetching" },
    ],
    status: "growing",
  },
  {
    slug: "sapada",
    name: "sapada.bapenda.garutkab.go.id",
    urls: {
      prod: "https://sapada.bapenda.garutkab.go.id",
      demo: "https://sapada-dev.rafadlis.space",
    },
    version: "v0.0.0-alpha",
    isPrivate: false,
    isOpenSource: false,
    description:
      "SAPADA (Regional Tax Administration System) is a comprehensive web platform designed to modernize and streamline regional tax management. It provides efficient tools for tax collection, administration, and reporting, helping government agencies manage their tax operations more effectively.",
    category: "Web App",
    tech: [
      { name: "Next.js 15", version: "15.0.0", purpose: "Framework" },
      { name: "TypeScript", version: "5.0.0", purpose: "Language" },
      { name: "Tailwind CSS", version: "3.0.0", purpose: "Styling" },
      { name: "Shadcn UI", purpose: "Component Library" },
      { name: "Supabase", purpose: "Database, Auth, and Storage" },
      { name: "Drizzle ORM", version: "0.42.0", purpose: "ORM" },
      { name: "Tanstack Query", version: "5^", purpose: "Data Fetching" },
    ],
    status: "in-progress",
  },
  {
    slug: "apeda",
    name: "APEDA",
    version: "v1.0.3",
    isPrivate: true,
    isOpenSource: false,
    description:
      "APEDA (AP3DA - Aplikasi Pengawasan dan Pemeriksaan Pajak Daerah)  A web application for efficient tax supervision and inspection management, streamlining administrative workflows and compliance monitoring.",
    category: "Web App",
    tech: [
      { name: "Next.js 15", version: "15.0.0", purpose: "Framework" },
      { name: "TypeScript", version: "5.0.0", purpose: "Language" },
      { name: "Tailwind CSS", version: "3.0.0", purpose: "Styling" },
      { name: "Shadcn UI", purpose: "Component Library" },
      { name: "Supabase", purpose: "Database, Auth, and Storage" },
      { name: "Drizzle ORM", version: "0.42.0", purpose: "ORM" },
    ],
    status: "growing",
  },
  {
    slug: "rafadlis-space",
    name: "rafadlis.space",
    version: "v0.0.0-beta",
    isPrivate: false,
    isOpenSource: true,
    description:
      "A dynamic digital portfolio showcasing my journey as a developer, featuring interactive project demonstrations, technical expertise, and creative solutions that bring ideas to life.",
    category: "Website",
    tech: [
      { name: "Next.js 15", version: "15.0.0", purpose: "Framework" },
      { name: "TypeScript", version: "5.0.0", purpose: "Language" },
      { name: "Tailwind CSS", version: "3.0.0", purpose: "Styling" },
      { name: "Shadcn UI", purpose: "Component Library" },
    ],
    status: "growing",
  },
  {
    slug: "epad-api",
    name: "EPAD API",
    version: "v2.0.0",
    isPrivate: true,
    isOpenSource: false,
    description:
      "A comprehensive RESTful API service for e-PAD (Elektronik Pendataan Daerah), providing secure and efficient data management, real-time synchronization, and seamless integration capabilities for government applications. Built with scalability and performance in mind.",
    category: "Web API",
    tech: [
      { name: "Next.js 15", version: "15^", purpose: "Framework" },
      { name: "TypeScript", version: "5^", purpose: "Language" },
      { name: "Drizzle ORM", version: "0.42.0", purpose: "ORM" },
    ],
    status: "completed",
  },
]
