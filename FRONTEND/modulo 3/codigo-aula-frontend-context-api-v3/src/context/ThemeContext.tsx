import { Dispatch, SetStateAction, createContext } from 'react';

interface ThemeContextProps {
  theme: 'DARK' | 'LIGHT',
  setTheme: Dispatch<SetStateAction<'DARK' | 'LIGHT'>>
}

export const ThemeContext = createContext<ThemeContextProps>({} as ThemeContextProps) 