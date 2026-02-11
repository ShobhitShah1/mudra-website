"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { THEMES, Theme } from "@/lib/themes";

interface ThemeContextType {
  themeName: string;
  theme: Theme;
  setTheme: (name: string) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [themeName, setThemeName] = useState("coffee");
  const [theme, setTheme] = useState<Theme>(THEMES.coffee);

  useEffect(() => {
    const root = document.documentElement;
    // Set CSS variables
    Object.entries(theme).forEach(([key, value]) => {
      if (typeof value === "string") {
        root.style.setProperty(`--${key}`, value);
      }
    });

    root.style.setProperty("--bg-main", theme.background);
    root.style.setProperty("--bg-surface", theme.backgroundAlt);
    root.style.setProperty("--text-primary", theme.text);
    root.style.setProperty("--text-secondary", theme.textSecondary);
    root.style.setProperty("--text-muted", theme.textMuted);
  }, [theme]);

  const changeTheme = (name: string) => {
    if (THEMES[name]) {
      setThemeName(name);
      setTheme(THEMES[name]);
    }
  };

  // Ensure context is available even before mount/hydration limit is lifted
  return (
    <ThemeContext.Provider value={{ themeName, theme, setTheme: changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
