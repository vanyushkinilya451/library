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
    font-size: 1rem;
  }
  `;
