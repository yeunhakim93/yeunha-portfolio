import ykLogo from "../assets/yk.svg";
import sun from "../assets/sunny-outline.svg";
import moon from "../assets/moon-outline.svg";

export const Navbar: React.FC<{
  isDark: boolean;
  handleIsDarkChange: (value: boolean) => void;
}> = ({ isDark, handleIsDarkChange }) => {
  return (
    <div className="navbar body-width">
      <img src={ykLogo} className="logo" alt="YK logo" />
      <ul className="ul-row">
        <li>about</li>
        <li>projects</li>
        <li>contact</li>
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
