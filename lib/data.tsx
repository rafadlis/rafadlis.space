import { ReactNode } from "react";
import { AppWindow } from "@phosphor-icons/react/dist/ssr";

export type Project = {
  id: number;
  name: string;
  version: string;
  description: ReactNode;
  category: {
    name: string;
    icon: ReactNode;
  };
  stack: string[];
  status: string;
};

export const projects: Project[] = [
  {
    id: 1,
    name: "SAPADA",
    version: "v0.0.0-alpha",
    description: (
      <>
        It is a web app for manage tax administration for government. SAPADA
        stand for{" "}
        <span className="italic ">Sistem Administrasi Pajak Daerah</span> or{" "}
        <span className="italic">Regional Tax Administration System</span>
      </>
    ),
    category: {
      name: "Web App",
      icon: <AppWindow className="h-4 w-4 text-muted-foreground" />,
    },
    stack: ["Next.js", "Tailwind CSS", "Shadcn UI"],
    status: "In Progress",
  },
];
