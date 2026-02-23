import { type IconProp } from "@fortawesome/fontawesome-svg-core";
import {
  faGithubAlt,
  faLinkedin,
  faNodeJs,
  faPython,
  faReact,
  faDocker,
  faJava,
} from "@fortawesome/free-brands-svg-icons";
import {
  faArrowsRotate,
  faBolt,
  faBoxesStacked,
  faBrain,
  faChartLine,
  faCode,
  faCubes,
  faDatabase,
  faDiagramProject,
  faFingerprint,
  faGlobe,
  faKey,
  faPenNib,
  faPlug,
  faRoute,
  faScrewdriverWrench,
  faServer,
  faShieldHalved,
  faStream,
  faUserPlus,
  faUserShield,
  faCirclePlay,
  faPencil,
} from "@fortawesome/free-solid-svg-icons";
import infoJson from "./info.json";
import { IPortfolioInfo, IProject, IProfileLink, ISkill } from "./types";

const skillIconByName: Record<string, IconProp> = {
  Python: faPython,
  Java: faJava,
  "C++": faCode,
  "RAG (LlamaIndex)": faBrain,
  "Multi-step Agent Workflows": faDiagramProject,
  "Structured Tool Execution": faScrewdriverWrench,
  Pinecone: faDatabase,
  LiteLLM: faBolt,
  "Vercel AI SDK": faBolt,
  "MCP Servers": faServer,
  "Node.js": faNodeJs,
  Express: faRoute,
  "REST APIs": faPlug,
  PostgreSQL: faDatabase,
  MySQL: faDatabase,
  MongoDB: faDatabase,
  "Redis Streams": faStream,
  RabbitMQ: faBoxesStacked,
  Docker: faDocker,
  Kubernetes: faCubes,
  React: faReact,
  Redux: faArrowsRotate,
  "TanStack Query": faChartLine,
  "Browser APIs": faGlobe,
  "WYSIWYG Editor Development": faPenNib,
  SAML: faKey,
  OIDC: faFingerprint,
  "JIT Provisioning": faUserPlus,
  RBAC: faUserShield,
  "Multi-tenant Authorization": faShieldHalved,
};

const resolveAssetPath = (path: string): string => {
  if (path.startsWith("http://") || path.startsWith("https://")) return path;
  if (path.startsWith("/")) return `${import.meta.env.BASE_URL}${path.slice(1)}`;
  return `${import.meta.env.BASE_URL}${path}`;
};

const skillImageByName: Record<string, string> = {
  TypeScript: resolveAssetPath("/typescript-mono.svg"),
};

export const projectActionIcons = {
  blog: faPencil,
  demo: faCirclePlay,
  github: faGithubAlt,
};

const skillGroupTitles = [
  "Core Languages",
  "Agentic AI",
  "Backend & Infrastructure",
  "Frontend Engineering",
  "Identity & Enterprise",
];

const profileLinks: IProfileLink[] = [
  {
    text: "GitHub",
    href: "https://github.com/yeunhakim93/",
    icon: faGithubAlt,
  },
  {
    text: "LinkedIn",
    href: "https://www.linkedin.com/in/yeunhakim93/",
    icon: faLinkedin,
  },
];

const skills: ISkill[][] = infoJson.skills.map((group) =>
  group.map((skill) => ({
    name: skill.name,
    icon: skillIconByName[skill.name],
    iconImageSrc: skillImageByName[skill.name],
  }))
);

const projects: IProject[] = infoJson.projects.map((project) => ({
  ...project,
  thumbnail: resolveAssetPath(project.thumbnail),
  stacks: [...project.stacks],
}));

export const fetchInfo: IPortfolioInfo = {
  skills,
  projects,
  contact: infoJson.contact,
  skillGroupTitles,
  profileLinks,
};
