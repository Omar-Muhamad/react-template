import { createContext } from "react";

export const ThemeContext = createContext("");

const Theme = ({ children }) => {
  const initialValue = () =>
    window.matchMedia("(prefers-color-scheme: dark)").matches === true
      ? "dark"
      : "light";

      console.log(initialValue())

  return (
    <ThemeContext.Provider value={initialValue()}>
      {children}
    </ThemeContext.Provider>
  );
};
export default Theme;
