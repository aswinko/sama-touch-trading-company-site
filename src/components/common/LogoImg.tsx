"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function Logo() {
  const { theme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // console.log("ff", theme);

  // This is necessary to avoid hydration mismatch
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  // Check if the user prefers dark theme or light theme
  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <img
      src={
        currentTheme === "light"
          ? "/SAMA-dark.png" // Light mode logo
          : "/SAMA-white.png" // Dark mode logo
      }
      alt="logo"
      className="object-contain w-80 h-56"
    />
  );
}

export function LogoSmall() {
  const { theme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // console.log("ff", theme);

  // This is necessary to avoid hydration mismatch
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  // Check if the user prefers dark theme or light theme
  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <img
      src={
        currentTheme === "light"
          ? "/SAMA-SMALL-dark.png" // Light mode logo
          : "/SAMA-FINAL-01.png" // Dark mode logo
      }
      className="w-20 h-20 object-contain"
      alt="logo"
    />
  );
}
