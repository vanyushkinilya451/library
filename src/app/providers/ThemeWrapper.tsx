import type { FC, ReactNode } from 'react';
import { Toaster } from 'react-hot-toast';
import { useAppSelector } from 'shared/lib';
import { darkTheme, GlobalStyles, lightTheme } from 'shared/ui';
import { ThemeProvider } from 'styled-components';

type Props = {
  children: ReactNode;
};

export const ThemeWrapper: FC<Props> = ({ children }) => {
  const theme = useAppSelector((state) => state.theme);
  const currentTheme = theme === 'light' ? lightTheme : darkTheme;
  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyles theme={currentTheme} />
      <Toaster
        containerStyle={{
          zIndex: 99999,
        }}
      />
      {children}
    </ThemeProvider>
  );
};
