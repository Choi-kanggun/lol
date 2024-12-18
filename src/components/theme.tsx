"use client";

import { useEffect, useState } from "react";

const Theme = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const element = document.documentElement;

    if (savedTheme === "dark") {
      element.classList.add("dark");
      setIsDarkMode(true);
    } else {
      element.classList.remove("dark");
      setIsDarkMode(false);
    }
  }, []);

  const toggleTheme = () => {
    const element = document.documentElement;
    if (element.classList.contains("dark")) {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    } else {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
    }
  };
  return (
    <button
      onClick={toggleTheme}
      className="px-4 py-2 bg-gray-800 dark:bg-gray-800 text-white dark:text-gray-200 rounded-lg transition"
    >
      {isDarkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
    </button>
  );
};

export default Theme;
