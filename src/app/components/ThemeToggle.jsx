"use client";

import useTheme from "../context/useTheme";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme} aria-label="Toggle theme">
      <span className="sr-only">Toggle theme</span>

      {theme === "dark" ? (
        <MoonIcon className="w-6 h-6 dark:text-slate-500 " />
      ) : (
        <SunIcon className="w-6 h-6 text-amber-500" />
      )}
    </button>
  );
}
