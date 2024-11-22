import { ReactNode } from "react";
import {
  AppWindow,
  Globe,
  PlugsConnected,
} from "@phosphor-icons/react/dist/ssr";

export type ProjectStatus =
  | "completed"
  | "in-progress"
  | "planned"
  | "dropped"
  | "growing";

export type Project = {
  id: number;
  name: string;
  version: string;
  description: ReactNode;
  category: {
    name: string;
    icon: ReactNode;
  };
  stack: Array<{
    name: string;
    version?: string;
    purpose?: string;
  }>;
  status: ProjectStatus;
};

export const projects: Project[] = [
  {
    id: 1,
    name: "SAPADA",
    version: "v0.0.0-alpha",
    description: (
      <>
        A web application for managing regional tax administration in
        government. SAPADA stands for{" "}
        <span className="italic">Sistem Administrasi Pajak Daerah</span> or{" "}
        <span className="italic">Regional Tax Administration System</span>
      </>
    ),
    category: {
      name: "Web App",
      icon: <AppWindow className="h-4 w-4 text-muted-foreground" />,
    },
    stack: [
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
    id: 2,
    name: "AWAS",
    version: "v0.0.0-alpha",
    description: (
      <>
        AWAS stands for{" "}
        <span className="italic">Administrasi Pengawasan & Pemeriksaan</span> or{" "}
        <span className="italic">Supervision & Inspection Administration</span>.
        A web app to streamline tax supervision and inspection processes.
      </>
    ),
    category: {
      name: "Web App",
      icon: <AppWindow className="h-4 w-4 text-muted-foreground" />,
    },
    stack: [
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
    name: "rafadlis.space",
    version: "v0.0.0-alpha",
    description: "A personal website to showcase my projects and skills.",
    category: {
      name: "Website",
      icon: <Globe className="h-4 w-4 text-muted-foreground" />,
    },
    stack: [
      { name: "Next.js 15", version: "15.0.0", purpose: "Framework" },
      { name: "TypeScript", version: "5.0.0", purpose: "Language" },
      { name: "Tailwind CSS", version: "3.0.0", purpose: "Styling" },
      { name: "Shadcn UI", purpose: "Component Library" },
    ],
    status: "growing",
  },
  {
    id: 4,
    name: "epad-api",
    version: "v1.1.0",
    description: (
      <>
        A RESTful API service for managing e-PAD (
        <span className="italic">Elektronik Pendataan Daerah</span> or{" "}
        <span className="italic">Electronic Regional Data Management</span>)
        application data. Provides endpoints for data retrieval, storage and
        synchronization between e-PAD client applications.
      </>
    ),
    category: {
      name: "API Web",
      icon: <PlugsConnected className="h-4 w-4 text-muted-foreground" />,
    },
    stack: [
      { name: "Next.js 15", version: "15.0.0", purpose: "Framework" },
      { name: "TypeScript", version: "5.0.0", purpose: "Language" },
      { name: "Prisma", version: "5.0.0", purpose: "ORM" },
    ],
    status: "completed",
  },
];
