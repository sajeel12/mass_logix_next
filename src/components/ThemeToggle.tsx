"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

type Theme = "light" | "dark";

function apply(theme: Theme) {
  const root = document.documentElement;
  root.classList.toggle("dark", theme === "dark");
  root.style.colorScheme = theme;
  try {
    localStorage.setItem("theme", theme);
  } catch {
    /* ignore private-mode storage errors */
  }
}

/** Light/dark switch. Default is light; choice persists in localStorage. */
export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Read whatever the pre-paint script already applied.
    const current = document.documentElement.classList.contains("dark")
      ? "dark"
      : "light";
    setTheme(current);
    setMounted(true);
  }, []);

  function toggle() {
    const next: Theme = theme === "dark" ? "light" : "dark";
    setTheme(next);
    apply(next);
  }

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      title={`Switch to ${isDark ? "light" : "dark"} mode`}
      className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-line-strong text-white/85 transition-all hover:border-lime/50 hover:text-lime"
    >
      {/* Render a stable icon until mounted to avoid hydration mismatch */}
      {mounted && isDark ? (
        <Sun className="h-4.5 w-4.5" />
      ) : (
        <Moon className="h-4.5 w-4.5" />
      )}
    </button>
  );
}
