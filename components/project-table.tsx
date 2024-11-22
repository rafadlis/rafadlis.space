import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { projects } from "@/lib/data";
import { Badge } from "./ui/badge";
import { HourglassMedium } from "@phosphor-icons/react/dist/ssr";

export default function ProjectTable() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Project</TableHead>
          <TableHead>Description</TableHead>
          <TableHead>Category</TableHead>
          <TableHead>Stack</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {projects.map((project) => (
          <TableRow key={project.id}>
            <TableCell>
              {project.name}
              <div className="text-xs text-muted-foreground/70">
                {project.version}
              </div>
            </TableCell>
            <TableCell>
              <div className="max-w-prose line-clamp-3">
                {project.description}
              </div>
            </TableCell>
            <TableCell>
              <div className="flex items-center gap-1.5">
                {project.category.icon}
                {project.category.name}
              </div>
            </TableCell>
            <TableCell>
              <div className="flex flex-wrap gap-1.5">
                {project.stack.map((tech) => (
                  <Badge key={tech} variant="outline">
                    {tech}
                  </Badge>
                ))}
              </div>
            </TableCell>
            <TableCell>
              <div className="flex items-center justify-center gap-1.5 rounded-full border border-warning px-3 py-1 text-center bg-warning/10  ">
                <HourglassMedium
                  weight="fill"
                  className="text-warning h-3.5 w-3.5"
                />
                {project.status}
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
