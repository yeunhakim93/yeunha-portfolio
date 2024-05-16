export interface ISkill {
  name: string;
  logo: string;
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
