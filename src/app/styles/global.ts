import InterBlack from "shared/fonts/Inter/Inter_18pt-Black.ttf";
import InterBold from "shared/fonts/Inter/Inter_18pt-Bold.ttf";
import InterItalic from "shared/fonts/Inter/Inter_18pt-Italic.ttf";
import InterLight from "shared/fonts/Inter/Inter_18pt-Light.ttf";
import InterMedium from "shared/fonts/Inter/Inter_18pt-Medium.ttf";
import InterRegular from "shared/fonts/Inter/Inter_18pt-Regular.ttf";
import InterThin from "shared/fonts/Inter/Inter_18pt-Thin.ttf";
import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

@font-face {
  font-family: 'Inter';
  font-weight: 100;
  src: url(${InterThin});
}

@font-face {
  font-family: 'Inter';
  font-weight: 300;
  src: url(${InterLight});
}

@font-face {
  font-family: 'Inter';
  font-weight: 400;
  src: url(${InterRegular});
}

@font-face {
  font-family: 'Inter';
  font-weight: 100;
  src: url(${InterItalic});
  font-style: italic;
}

@font-face {
  font-family: 'Inter';
  font-weight: 500;
  src: url(${InterMedium});
}

@font-face {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  src: url(${InterBold});
}

@font-face {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 900;
  src: url(${InterBlack});
}

html,
body {
  padding: 0;
  margin: 0;
}

a {
  color: inherit;
  text-decoration: none;
}

button{
  background-color: transparent;
  border-style: none;
  border: 1px solid black;
}

* {
  box-sizing: border-box;
  font-family: 'Inter';
  font-weight: 400;
}
`;
