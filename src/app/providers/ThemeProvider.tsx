import type { ReactNode } from "react";
import { Toaster } from "react-hot-toast";
import { useAppSelector } from "shared/lib";
import { darkTheme, GlobalStyles, lightTheme } from "shared/ui";
import { ThemeProvider as ThemeWrapper } from "styled-components";

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const theme = useAppSelector((state) => state.theme);
  const currentTheme = theme === "light" ? lightTheme : darkTheme;
  return (
    <ThemeWrapper theme={currentTheme}>
      <GlobalStyles theme={currentTheme} />
      <Toaster
        containerStyle={{
          zIndex: 99999,
        }}
      />
      {children}
    </ThemeWrapper>
  );
};
