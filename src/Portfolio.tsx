import { useEffect, useState } from "react";
import {
  Navbar,
  Cityscape,
  About,
  Skills,
  Contact,
  Projects,
} from "./components";
import { fetchInfo } from "./info";
import "./Portfolio.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faSquareJs,
  faReact,
  faGithub,
  faLinkedin,
  faJava,
  faPython,
  faNodeJs,
  faGithubAlt,
} from "@fortawesome/free-brands-svg-icons";
import { faPencil, faCirclePlay } from "@fortawesome/free-solid-svg-icons";

library.add(
  faSquareJs,
  faReact,
  faGithub,
  faLinkedin,
  faJava,
  faPython,
  faNodeJs,
  faPencil,
  faCirclePlay,
  faGithubAlt
);

export const Portfolio: React.FC = () => {
  const info = fetchInfo;
  const [isDark, setIsDark] = useState<boolean>(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    if (mediaQuery.matches) setIsDark(true);
    const handleChange = (e: MediaQueryListEvent) => setIsDark(e.matches);
    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  const handleIsDarkChange = (value: boolean) => {
    setIsDark(value);
  };

  return (
    <main className={(isDark ? "dark" : "light") + " "}>
      <Cityscape />
      <Navbar isDark={isDark} handleIsDarkChange={handleIsDarkChange} />
      <div className="main-container flex-column flex-gap-40">
        <About isDark={isDark} />
        <Skills skills={info.skills} />
        <Projects projects={info.projects} />
        <Contact contact={info.contact} />
      </div>
    </main>
  );
};
