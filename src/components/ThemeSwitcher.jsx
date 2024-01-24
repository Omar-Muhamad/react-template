import { useContext, useEffect, useState } from "react";
import { IoMoonSharp, IoSunny } from "react-icons/io5";
import { ThemeContext } from "./ThemeContext";

const toggleStyle =
  "absolute left-1 top-1 dark:bg-neutral-300 bg-neutral-800 w-4 h-4 rounded-full transition";

const ThemeSwitcher = () => {
  const initialTheme = useContext(ThemeContext);
  const [theme, setTheme] = useState(initialTheme);

  useEffect(() => {
    if (theme === "dark") {
      document.querySelector("body").classList.add("dark");
    } else {
      document.querySelector("body").classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <button
      className="relative flex items-center cursor-pointer"
      onClick={handleThemeSwitch}
    >
      <div className="border-[1px] dark:border-neutral-300 border-neutral-800 w-10 h-6 rounded-full" />
      <div
        className={
          theme === "dark" ? toggleStyle : `${toggleStyle} translate-x-[100%]`
        }
      >
        {theme === "dark" ? (
          <IoMoonSharp className="bg-neutral-800" />
        ) : (
          <IoSunny className="bg-white" />
        )}
      </div>
    </button>
  );
};
export default ThemeSwitcher;
