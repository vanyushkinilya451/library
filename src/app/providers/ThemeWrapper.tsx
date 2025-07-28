import type { FC, ReactNode } from 'react';
import { useAppSelector } from 'shared/lib';
import { darkTheme, GlobalStyles, lightTheme } from 'shared/ui';
import { ThemeProvider } from 'styled-components';

type Props = {
  children: ReactNode;
};

export const ThemeWrapper: FC<Props> = ({ children }) => {
  const theme = useAppSelector((state) => state.theme);
  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
};
