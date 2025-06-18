// import InterBlack from "shared/fonts/Inter/Inter-Black.woff2";
// import InterBold from "shared/fonts/Inter/Inter-Bold.woff2";
// import InterItalic from "shared/fonts/Inter/Inter-Italic.woff2";
// import InterLight from "shared/fonts/Inter/Inter-Light.woff2";
// import InterMedium from "shared/fonts/Inter/Inter-Medium.woff2";
// import InterRegular from "shared/fonts/Inter/Inter-Regular.woff2";
// import InterThin from "shared/fonts/Inter/Inter-Thin.woff2";

import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  

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
    cursor: pointer;
    padding: 0;
  }

  * {
    box-sizing: border-box;
    font-family: 'Inter';
    font-weight: 400;
  }
  `;
