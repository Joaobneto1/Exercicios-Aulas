import { ReactNode, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";

interface ThemeProviderProps {
  children: ReactNode
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState<'DARK' | 'LIGHT'>('DARK');

  const values = {
    theme,
    setTheme
  }

  return <ThemeContext.Provider value={values}>
    {children}
  </ThemeContext.Provider>
}