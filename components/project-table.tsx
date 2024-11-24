import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { projects, Project, ProjectStatus } from "@/lib/data";
import {
  CheckCircle,
  CircleNotch,
  Queue,
  X,
  ArrowCircleUp,
  Lock,
} from "@phosphor-icons/react/dist/ssr";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Button } from "./ui/button";
import { ReactNode } from "react";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

// Individual cell components
const ProjectNameCell = ({ project }: { project: Project }) => (
  <TableCell className="group">
    <div className="flex items-center gap-1.5">
      {project.name}{" "}
      {project.isPrivate && (
        <TooltipProvider delayDuration={0}>
          <Tooltip>
            <TooltipTrigger>
              <Lock
                weight="bold"
                className="h-3 w-3 text-muted-foreground/40 group-hover:text-muted-foreground"
              />
            </TooltipTrigger>
            <TooltipContent>
              <p className="text-sm">This project is private</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      )}
    </div>
    <div className="w-fit whitespace-nowrap text-xs text-muted-foreground/70 font-mono">
      {project.version}
    </div>
  </TableCell>
);

const DescriptionCell = ({ project }: { project: Project }) => (
  <TableCell className="max-md:hidden">
    <div className="max-w-prose line-clamp-2 text-muted-foreground">
      {project.description}
    </div>
  </TableCell>
);

const CategoryCell = ({ project }: { project: Project }) => (
  <TableCell>
    <div className="flex items-center gap-1.5 w-fit whitespace-nowrap">
      {project.category.icon}
      {project.category.name}
    </div>
  </TableCell>
);

const StackCell = ({ project }: { project: Project }) => (
  <TableCell className="max-sm:hidden">
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" size="sm">
          <span className="font-mono">{project.stack.length}</span>
          <span className="text-muted-foreground/70">lib</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[400px]">
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <h4 className="font-semibold">Stack Used</h4>
            <span className="text-xs text-muted-foreground">
              ({project.stack.length} technologies)
            </span>
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[120px]">Technology</TableHead>
                <TableHead className="w-[100px]">Version</TableHead>
                <TableHead>Purpose</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {project.stack.map((tech) => (
                <TableRow key={tech.name}>
                  <TableCell className="font-medium">{tech.name}</TableCell>
                  <TableCell className="text-muted-foreground font-mono">
                    {tech.version || "-"}
                  </TableCell>
                  <TableCell className="text-muted-foreground">
                    {tech.purpose || "-"}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </PopoverContent>
    </Popover>
  </TableCell>
);

const getStatusConfig = (status: ProjectStatus) => {
  const configs: Record<
    ProjectStatus,
    {
      icon: ReactNode;
      text: string;
      classes: string;
      description: string;
    }
  > = {
    completed: {
      icon: <CheckCircle weight="fill" className="h-3.5 w-3.5 text-success" />,
      text: "Completed",
      classes: "border-success text-success bg-success/10",
      description:
        "Project has been completed and is no longer actively developed",
    },
    "in-progress": {
      icon: (
        <CircleNotch
          weight="fill"
          className="h-3.5 w-3.5 text-warning animate-spin"
        />
      ),
      text: "In Progress",
      classes: "border-warning text-warning bg-warning/10",
      description: "Project is currently under active development",
    },
    planned: {
      icon: (
        <Queue weight="fill" className="h-3.5 w-3.5 text-muted-foreground" />
      ),
      text: "Planned",
      classes: "border-muted text-muted-foreground bg-muted/10",
      description: "Project is planned but development hasn't started yet",
    },
    dropped: {
      icon: <X weight="fill" className="h-3.5 w-3.5 text-destructive" />,
      text: "Dropped",
      classes: "border-destructive text-destructive bg-destructive/10",
      description: "Project has been discontinued or abandoned",
    },
    growing: {
      icon: (
        <ArrowCircleUp weight="fill" className="h-3.5 w-3.5 text-primary" />
      ),
      text: "Growing",
      classes: "border-primary text-primary bg-primary/10",
      description:
        "Project is completed but continues to receive updates and improvements",
    },
  };

  return configs[status];
};

const StatusCell = ({ project }: { project: Project }) => {
  const config = getStatusConfig(project.status);

  return (
    <TableCell>
      <HoverCard openDelay={50} closeDelay={50}>
        <HoverCardTrigger asChild>
          <div
            className={`w-fit whitespace-nowrap flex items-center justify-center gap-1.5 rounded-full border px-3 py-1 text-center ${config.classes} cursor-help`}
          >
            {config.icon}
            {config.text}
          </div>
        </HoverCardTrigger>
        <HoverCardContent side="right" align="start" className="border-primary">
          <p className="text-sm">{config.description}</p>
        </HoverCardContent>
      </HoverCard>
    </TableCell>
  );
};

export default function ProjectTable() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Project</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Category</TableHead>
          <TableHead className="max-md:hidden">Description</TableHead>
          <TableHead className="max-sm:hidden">Stack</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {projects.map((project) => (
          <TableRow key={project.id}>
            <ProjectNameCell project={project} />
            <StatusCell project={project} />
            <CategoryCell project={project} />
            <DescriptionCell project={project} />
            <StackCell project={project} />
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
