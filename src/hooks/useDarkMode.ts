import { useState, useEffect } from "react";
export default function useDarkMode() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("darkMode") as string)) {
      setIsDarkMode(true);
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    if (isDarkMode) {
      document.body.classList.remove("dark");
    } else {
      document.body.classList.add("dark");
    }
    localStorage.setItem("darkMode", JSON.stringify(isDarkMode));
  };

  return {
    isDarkMode,
    toggleDarkMode,
  };
}
