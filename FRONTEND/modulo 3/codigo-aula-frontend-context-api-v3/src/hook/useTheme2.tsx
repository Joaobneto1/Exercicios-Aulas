import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState
} from 'react';


//context
interface ThemeContextProps {
  theme: 'DARK' | 'LIGHT',
  setTheme: Dispatch<SetStateAction<'DARK' | 'LIGHT'>>
}

const ThemeContext = createContext<ThemeContextProps>({} as ThemeContextProps)

interface ThemeProviderProps {
  children: ReactNode
}

// Provider
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

//hook

export const useTheme = () => {
  return useContext(ThemeContext)
}