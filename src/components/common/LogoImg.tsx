"use client"

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function Logo() {
  const { theme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // This is necessary to avoid hydration mismatch
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  // Check if the user prefers dark theme or light theme
  const currentTheme = theme === 'system' ? systemTheme : theme;

  return (
    <img
      src={
        currentTheme === 'dark'
          ? '/SAMA-white.png' // Dark mode logo
          : '/SAMA-white.png' // Light mode logo
      }
      alt="logo"
      className="object-contain w-80 h-56"
    />
  );
}
