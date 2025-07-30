import { st } from 'shared/lib';
import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    background-color: ${st('colors', 'background')};
    color: ${st('colors', 'textPrimary')};
    transition: ${st('transitions', 'colors')};
  }

  html {
    overflow-y: scroll;
    scroll-behavior: smooth;
  }

  button, a, [role="button"] {
    -webkit-tap-highlight-color: transparent; 
  }

  a {
    color: inherit;
    text-decoration: none;
    cursor: pointer;
    transition: ${st('transitions', 'colors')};
  }

  a:hover {
    opacity: ${st('opacity', 'hover')};
  }

  button {
    background-color: transparent;
    border-style: none;
    border: 1px solid ${st('colors', 'textPrimary')};
    cursor: pointer;
    padding: 0;
    transition: ${st('transitions', 'colors')};
  }

  button:hover {
    opacity: ${st('opacity', 'hover')};
  }

  * {
    box-sizing: border-box;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
    line-height: ${st('lineHeights', 'normal')};
  }

  ::selection {
    background: ${st('colors', 'primary')};
    color: ${st('colors', 'textWhite')};
  }

  ::-moz-selection {
    background: ${st('colors', 'primary')};
    color: ${st('colors', 'textWhite')};
  }
`;
