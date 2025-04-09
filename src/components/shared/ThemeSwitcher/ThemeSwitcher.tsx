import { useContext } from "react";
import { ThemeContext } from "../../../helpers/theme/ThemeContext";

import "./ThemeSwitcher.scss";
import classNames from "classnames";
import { Theme } from "../../../utils/types";

const ThemeSwitcher = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const toggleTheme = () => {
    setTheme(theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT);
  }

  return (
    <div
      className={classNames("theme-switcher", {
        'switch': theme === Theme.LIGHT,
      })}
      onClick={toggleTheme}
    ></div>
  );
};

export default ThemeSwitcher;
