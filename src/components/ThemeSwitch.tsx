import { useContext } from "react";
import { ThemeContext, ThemeContextProps } from "../Context/ThemeContext";
import { Icon } from "../components/Util/Icon";
import { Themes, useTheme } from "../components/Util/useTheme";

export const ThemeSwitch = () => {
  const { theme } = useContext<ThemeContextProps>(ThemeContext);
  const { switchTheme } = useTheme();
  const darkMode = theme === Themes.DARK_THEME;

  return (
    <div className="theme-switch">
      <input id="theme-switch__input" type="checkbox" defaultChecked={darkMode} onClick={switchTheme} />
      <label className="theme-switch__trail" htmlFor="theme-switch__input">
        <span className="theme-switch__handler">
          {/* <Icon name={darkMode ? "moon" : "sun"} /> */}
          <p>Switch</p>
        </span>
      </label>
    </div>
  );
};