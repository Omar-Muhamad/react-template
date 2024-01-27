import { createContext } from "react";

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
export default Theme;
