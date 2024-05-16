import { type IconProp } from "@fortawesome/fontawesome-svg-core";
import { IProject } from "../types";
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
              <Tag
                text={stack}
                icon={`fa-brands fa-${stack.toLowerCase()}` as IconProp}
              />
            </li>
          ))}
        </ul>
        <div className="flex-gap-8">
          {project.blog && (
            <a href={project.blog} target="_blank">
              <Tag
                text="Blog"
                icon={"fa-solid fa-pencil" as IconProp}
                variant="link"
              />
            </a>
          )}
          {project.demo && (
            <a href={project.demo} target="_blank">
              <Tag
                text="Demo"
                icon={"fa-solid fa-circle-play" as IconProp}
                variant="link"
              />
            </a>
          )}
          {project.github && (
            <a href={project.github} target="_blank">
              <Tag
                text="GitHub"
                icon={"fa-brands fa-github-alt" as IconProp}
                variant="link"
              />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
