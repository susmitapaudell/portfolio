"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  // null until mounted, so we never render a toggle state the server didn't
  // actually know — avoids a hydration mismatch without extra dependencies.
  const [isDark, setIsDark] = useState<boolean | null>(null);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  function toggle() {
    const next = !document.documentElement.classList.contains("dark");
    document.documentElement.classList.toggle("dark", next);
    window.localStorage.setItem("theme", next ? "dark" : "light");
    setIsDark(next);
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={
        isDark ? "Switch to light theme" : "Switch to dark theme"
      }
      aria-pressed={isDark ?? false}
      className="rounded-sm border border-border px-2.5 py-1 font-mono text-xs text-muted transition-colors hover:border-accent hover:text-accent"
    >
      {isDark === null ? "theme" : isDark ? "dark" : "light"}
    </button>
  );
}
