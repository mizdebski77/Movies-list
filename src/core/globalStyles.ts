
import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
html {
    box-sizing: border-box;
  }
  
  *,
  ::after,
  ::before {
    box-sizing: inherit;
  }
  
  body {
    font-family: "Poppins", sans-serif;
    word-break: break-word;
    text-decoration: none;
    background: ${({ theme }) => theme.color.mainColor};
    color: ${({ theme }) => theme.color.fontPrimary};
  }`;
