/**
 * global.js
 * Uses createGlobalStyle from styled components to inject global styles
 * into the site. Also imports and sets fonts.
 */

import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

import '@fontsource/oswald';
import '@fontsource/roboto';

export const GlobalStyles = createGlobalStyle`

${normalize}
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body {
    padding: 0;
    margin: 0;
    min-height: 100%;
    text-rendering: optimizeLegibility;
    overflow: hidden;
    font-family: "Roboto";
  }

  h1,
  h2,
  h3,
  h4,
  h5 {
    font-family: "oswald";
  }

  a{
    text-decoration: none;
    color: inherit;
  }
`;
