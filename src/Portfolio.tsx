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

export const Portfolio: React.FC = () => {
  const info = fetchInfo;
  const [isDark, setIsDark] = useState<boolean>(() =>
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
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
        <Skills
          skills={info.skills}
          skillGroupTitles={info.skillGroupTitles}
          profileLinks={info.profileLinks}
        />
        <Projects projects={info.projects} />
        <Contact contact={info.contact} />
      </div>
    </main>
  );
};
