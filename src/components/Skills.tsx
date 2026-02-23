import { IProfileLink, ISkill } from "../types";
import { Tag } from "./Tag";

export const Skills: React.FC<{
  skills: ISkill[][];
  skillGroupTitles: string[];
  profileLinks: IProfileLink[];
}> = ({ skills, skillGroupTitles, profileLinks }) => {
  const renderSkillGroup = (skillGroup: ISkill[] | undefined, index: number) => {
    if (!skillGroup) return null;

    return (
          <div
            className="skills-group container card flex-column"
            key={skillGroupTitles[index] ?? index}
          >
        <h3>{skillGroupTitles[index] ?? "Technical Focus"}</h3>
        <div className="skills-tags">
          {skillGroup.map((skill) => (
            <Tag
              key={skill.name}
              text={skill.name}
              icon={skill.icon}
              iconImageSrc={skill.iconImageSrc}
            />
          ))}
        </div>
      </div>
    );
  };

  return (
    <section className="skills">
      <div className="skills-grid">
        {renderSkillGroup(skills[0], 0)}
        <div className="skills-group container card flex-column">
          <h3>Profiles</h3>
          <div className="skills-links">
            {profileLinks.map((link) => (
              <a href={link.href} key={link.text} target="_blank" rel="noreferrer">
                <Tag text={link.text} icon={link.icon} variant="link" />
              </a>
            ))}
          </div>
        </div>
        {renderSkillGroup(skills[1], 1)}
        {renderSkillGroup(skills[2], 2)}
        {renderSkillGroup(skills[3], 3)}
        {renderSkillGroup(skills[4], 4)}
      </div>
    </section>
  );
};
