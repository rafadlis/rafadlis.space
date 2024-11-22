import { ReactNode } from "react";

export type Project = {
  id: number;
  name: string;
  description: ReactNode;
  category: string;
  stack: string[];
  status: string;
};

export const projects: Project[] = [
  {
    id: 1,
    name: "SAPADA",
    description: (
      <>
        It is a web app for manage tax administration for government. SAPADA
        stand for{" "}
        <span className="italic ">Sistem Administrasi Pajak Daerah</span> or{" "}
        <span className="italic">Regional Tax Administration System</span>
      </>
    ),
    category: "Category 1",
    stack: ["Next.js", "Tailwind CSS", "Shadcn UI"],
    status: "Completed",
  },
];
