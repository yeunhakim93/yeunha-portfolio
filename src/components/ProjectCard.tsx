import { IProject } from "../types";
import { projectActionIcons } from "../info";
import { Tag } from "./";

export const ProjectCard: React.FC<{ project: IProject }> = ({ project }) => {
  return (
    <div className="card flex-row">
      {!project.thumbnail && (
        <div className="project-thumbnail">Thumbnail Coming Soon</div>
      )}
      {project.thumbnail && (
        <img className="project-thumbnail" src={project.thumbnail} />
      )}
      <div className="container flex-column">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <ul className="ul-row flex-gap-8  flex-wrap">
          {project.stacks.map((stack) => (
            <li>
              <Tag text={stack} />
            </li>
          ))}
        </ul>
        <div className="flex-gap-8">
          {project.blog && (
            <a href={project.blog} target="_blank">
              <Tag text="Blog" icon={projectActionIcons.blog} variant="link" />
            </a>
          )}
          {project.demo && (
            <a href={project.demo} target="_blank">
              <Tag text="Demo" icon={projectActionIcons.demo} variant="link" />
            </a>
          )}
          {project.github && (
            <a href={project.github} target="_blank">
              <Tag
                text="GitHub"
                icon={projectActionIcons.github}
                variant="link"
              />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
