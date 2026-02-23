import { type IconProp } from "@fortawesome/fontawesome-svg-core";

export interface ISkill {
  name: string;
  icon?: IconProp;
  iconImageSrc?: string;
}

export interface IProject {
  title: string;
  year: string;
  description: string;
  stacks: string[];
  thumbnail: string;
  blog?: string;
  github?: string;
  demo?: string;
}

export interface IProfileLink {
  text: string;
  href: string;
  icon?: IconProp;
}

export interface IPortfolioInfo {
  skills: ISkill[][];
  projects: IProject[];
  contact: string;
  skillGroupTitles: string[];
  profileLinks: IProfileLink[];
}
