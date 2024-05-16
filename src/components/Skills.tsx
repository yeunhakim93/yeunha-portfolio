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
    </div>
  );
};
