export type Project = {
  id: number;
  name: string;
  description: string;
  category: string;
  stack: string[];
  status: string;
};

export const projects: Project[] = [
  {
    id: 1,
    name: "Project 1",
    description: "Description 1",
    category: "Category 1",
    stack: ["Next.js", "Tailwind CSS", "Shadcn UI"],
    status: "Completed",
  },
];
