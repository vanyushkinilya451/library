import type { FC, ReactNode } from 'react';
import { useEffect, useState } from 'react';
import { darkTheme, GlobalStyles, lightTheme } from 'shared/ui';
import { ThemeProvider } from 'styled-components';

type Props = {
  children: ReactNode;
};

const LOCAL_STORAGE_KEY = 'theme';

type Theme = 'light' | 'dark';

export const ThemeWrapper: FC<Props> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>('light');
  useEffect(() => {
    const savedTheme = localStorage.getItem(LOCAL_STORAGE_KEY) as Theme | null;

    if (savedTheme) {
      setTheme(savedTheme);
    } else {
      setTheme('dark');
    }
  }, []);

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
};
