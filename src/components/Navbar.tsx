import ykLogo from "../assets/yk.svg";
import sun from "../assets/sunny-outline.svg";
import moon from "../assets/moon-outline.svg";

export const Navbar: React.FC<{
  isDark: boolean;
  handleIsDarkChange: (value: boolean) => void;
}> = ({ isDark, handleIsDarkChange }) => {
  const handleScrollTo = (id: string) => {
    const element = document.getElementsByClassName(id)[0];
    element?.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest",
    });
  };

  return (
    <div className="navbar body-width">
      <img src={ykLogo} className="logo" alt="YK logo" />
      <ul className="ul-row">
        <li onClick={() => handleScrollTo("skills")}>skills</li>
        <li onClick={() => handleScrollTo("projects")}>projects</li>
        <li onClick={() => handleScrollTo("contact")}>contact</li>
        <li>
          <input
            type="checkbox"
            id="switch-input"
            checked={isDark}
            onChange={(e) => handleIsDarkChange(e.target.checked)}
          />
          <label className="switch" htmlFor="switch-input">
            <img src={sun} className="sun" alt="sun icon" />
            <img src={moon} className="moon" alt="moon icon" />
          </label>
        </li>
      </ul>
    </div>
  );
};
