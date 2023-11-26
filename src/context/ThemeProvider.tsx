import Raact, { createContext, useMemo, useState } from 'react';

export const LOCAL_STORAGE_THEME_KEY = 'theme';

export enum Theme {
  LIGHT = 'light',
  DARK = 'dark',
}

interface ThemeContextType {
  theme?: Theme;
  setTheme?: React.Dispatch<Theme>;
}

export const ThemeContext = createContext<ThemeContextType>({});

interface Props {
  children: React.ReactElement;
}

const storageTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT;

export const ThemeProvider: React.FC<Props> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(storageTheme);


  const value = useMemo(() => ({
    theme,
    setTheme,
  }), [theme])

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  )
}
