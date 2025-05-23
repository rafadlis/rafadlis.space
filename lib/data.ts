// Simple data model without React dependencies
export type ProjectStatus =
  | "completed"
  | "in-progress"
  | "planned"
  | "dropped"
  | "growing";

export type ProjectCategory = "web-app" | "website" | "api-web";

export type Project = {
  id: number;
  name: string;
  urls?: {
    prod?: string;
    demo?: string;
  };
  version: string;
  isPrivate: boolean;
  isOpenSource: boolean;
  description: string;
  category: {
    name: string;
    icon: ProjectCategory;
  };
  tech: Array<{
    name: string;
    version?: string;
    purpose?: string;
  }>;
  status: ProjectStatus;
};

export const projects: Project[] = [
  {
    id: 6,
    name: "tirtakencana.co.id",
    urls: {
      prod: "https://tirtakencana.co.id",
    },
    version: "-",
    isPrivate: false,
    isOpenSource: false,
    description:
      "Primary website for Tirtakencana as a hotel and resort company.",
    category: {
      name: "Website",
      icon: "website",
    },
    tech: [
      { name: "Next.js 15", version: "15^", purpose: "Framework" },
      { name: "TypeScript", version: "5^", purpose: "Language" },
      { name: "Motion", version: "-", purpose: "Animation" },
      { name: "Tailwind CSS", version: "4^", purpose: "Styling" },
      { name: "Shadcn UI", purpose: "Component Library" },
    ],
    status: "planned",
  },
  {
    id: 5,
    name: "app.tirtakencana.co.id",
    urls: {
      prod: "https://app.tirtakencana.co.id",
    },
    version: "v1.0.0",
    isPrivate: false,
    isOpenSource: false,
    description:
      "A comprehensive Hotel and Resort Management System designed to streamline operations from Front Office to Accounting. Features include reservation management, guest services, room allocation, billing, and financial reporting.",
    category: {
      name: "Web App",
      icon: "web-app",
    },
    tech: [
      { name: "Next.js 15", version: "15^", purpose: "Framework" },
      { name: "TypeScript", version: "5^", purpose: "Language" },
      { name: "Tailwind CSS", version: "4^", purpose: "Styling" },
      { name: "Shadcn UI", purpose: "Component Library" },
      { name: "Supabase", purpose: "Database, Auth, and Storage" },
      { name: "Drizzle ORM", version: "0.42.0", purpose: "ORM" },
    ],
    status: "growing",
  },
  {
    id: 4,
    name: "SAPADA",
    urls: {
      prod: "https://sapada.bapenda.garutkab.go.id",
      demo: "https://sapada-dev.rafadlis.space",
    },
    version: "v0.0.0-alpha",
    isPrivate: false,
    isOpenSource: false,
    description:
      "SAPADA (Regional Tax Administration System) is a comprehensive web platform designed to modernize and streamline regional tax management. It provides efficient tools for tax collection, administration, and reporting, helping government agencies manage their tax operations more effectively.",
    category: {
      name: "Web App",
      icon: "web-app",
    },
    tech: [
      { name: "Next.js 15", version: "15.0.0", purpose: "Framework" },
      { name: "TypeScript", version: "5.0.0", purpose: "Language" },
      { name: "Tailwind CSS", version: "3.0.0", purpose: "Styling" },
      { name: "Shadcn UI", purpose: "Component Library" },
      { name: "Supabase", purpose: "Backend" },
      { name: "Prisma", version: "5.0.0", purpose: "ORM" },
    ],
    status: "in-progress",
  },
  {
    id: 3,
    name: "APEDA",
    version: "v1.0.3",
    isPrivate: true,
    isOpenSource: false,
    description:
      "APEDA (AP3DA - Aplikasi Pengawasan dan Pemeriksaan Pajak Daerah)  A web application for efficient tax supervision and inspection management, streamlining administrative workflows and compliance monitoring.",
    category: {
      name: "Web App",
      icon: "web-app",
    },
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
    id: 2,
    name: "rafadlis.space",
    version: "v0.0.0-beta",
    isPrivate: false,
    isOpenSource: true,
    description:
      "A dynamic digital portfolio showcasing my journey as a developer, featuring interactive project demonstrations, technical expertise, and creative solutions that bring ideas to life.",
    category: {
      name: "Website",
      icon: "website",
    },
    tech: [
      { name: "Next.js 15", version: "15.0.0", purpose: "Framework" },
      { name: "TypeScript", version: "5.0.0", purpose: "Language" },
      { name: "Tailwind CSS", version: "3.0.0", purpose: "Styling" },
      { name: "Shadcn UI", purpose: "Component Library" },
    ],
    status: "growing",
  },
  {
    id: 1,
    name: "epad-api",
    version: "v2.0.0",
    isPrivate: true,
    isOpenSource: false,
    description:
      "A comprehensive RESTful API service for e-PAD (Elektronik Pendataan Daerah), providing secure and efficient data management, real-time synchronization, and seamless integration capabilities for government applications. Built with scalability and performance in mind.",
    category: {
      name: "API Web",
      icon: "api-web",
    },
    tech: [
      { name: "Next.js 15", version: "15^", purpose: "Framework" },
      { name: "TypeScript", version: "5^", purpose: "Language" },
      { name: "Drizzle ORM", version: "0.42.0", purpose: "ORM" },
    ],
    status: "completed",
  },
];
