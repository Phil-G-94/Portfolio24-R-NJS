"use client";

import useTheme from "../context/useTheme";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme} aria-label="Toggle theme">
      <span className="sr-only">Toggle theme</span>

      {theme === "dark" ? (
        <MoonIcon className="w-4 h-4 text-dpurple dark:text-afwhite" />
      ) : (
        <SunIcon className="w-4 h-4 text-dpurple dark:text-afwhite" />
      )}
    </button>
  );
}
