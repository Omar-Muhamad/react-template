import { createContext } from "react";
import PropTypes from "prop-types";

export const ThemeContext = createContext("");

const Theme = ({ children }) => {
  const initialValue = () =>
    window.matchMedia("(prefers-color-scheme: dark)").matches === true
      ? "dark"
      : "light";

  const defaultTheme =
    JSON.parse(localStorage.getItem("theme")) || initialValue();

  return (
    <ThemeContext.Provider value={defaultTheme}>
      {children}
    </ThemeContext.Provider>
  );
};

Theme.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Theme;
