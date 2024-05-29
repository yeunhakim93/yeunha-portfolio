import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { ISkill } from "../types";
import { Tag } from "./Tag";

export const Skills: React.FC<{ skills: ISkill[][] }> = ({ skills }) => {
  return (
    <div className="skills">
      {skills.map((skillColumns) => (
        <div className="container card flex-column">
          {skillColumns.map((skill) => (
            <Tag
              text={skill.name}
              icon={`fa-brands fa-${skill.logo}` as IconProp}
            />
          ))}
        </div>
      ))}
      <div className="container card flex-column">
        <a href="https://github.com/yeunhakim93/" target="_blank">
          <Tag
            text="GitHub"
            icon={"fa-brands fa-github-alt" as IconProp}
            variant="link"
          />
        </a>
        <a href="https://www.linkedin.com/in/yeunhakim93/" target="_blank">
          <Tag
            text={"LinkedIn"}
            icon={"fa-brands fa-linkedin" as IconProp}
            variant="link"
          />
        </a>
      </div>
    </div>
  );
};
