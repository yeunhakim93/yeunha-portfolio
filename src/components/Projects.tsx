import { IProject } from "../types";
import { ProjectCard } from "./ProjectCard";

export const Projects: React.FC<{ projects: IProject[] }> = ({ projects }) => {
  return (
    <div className="flex-column flex-gap-40">
      {projects.map((project) => (
        <ProjectCard project={project} />
      ))}
    </div>
  );
};
