import { createGlobalStyle } from "styled-components";
import InterBlack from "./fonts/Inter/Inter_18pt-Black.ttf";
import InterBold from "./fonts/Inter/Inter_18pt-Bold.ttf";
import InterMedium from "./fonts/Inter/Inter_18pt-Medium.ttf";
import InterRegular from "./fonts/Inter/Inter_18pt-Regular.ttf";

export const GlobalStyles = createGlobalStyle`

@font-face {
  font-family: 'Inter';
  font-weight: 400;
  src: url(${InterRegular});
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
