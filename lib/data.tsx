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
  isPrivate: boolean;
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
    isPrivate: true,
    description: (
      <>
        A comprehensive web platform for regional tax management and
        administration. SAPADA ({""}
        <span className="italic">Regional Tax Administration System</span>)
        streamlines government tax operations.
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
    isPrivate: true,
    description: (
      <>
        A web application for efficient tax supervision and inspection
        management, streamlining administrative workflows and compliance
        monitoring.
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
    version: "v0.0.0-beta",
    isPrivate: false,
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
    isPrivate: true,
    description: (
      <>
        A robust API service for e-PAD ({""}
        <span className="italic">Elektronik Pendataan Daerah</span>) data
        management, enabling seamless data synchronization and integration for
        government applications.
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
