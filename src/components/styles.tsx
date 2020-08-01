import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  html, body {
    height: 100%;
  }

  #root {
    display: grid;
    grid-template-rows: auto 1fr auto;
    grid-template-areas: "header" "main" "footer";
    min-height: 100%;
    min-width: 480px;

    > header {
      grid-area: header;
      padding: 0 20px;
    }

    > main {
      grid-area: main;
      padding: 0 20px;
    }

    > footer {
      grid-area: footer;
      padding: 0 20px;
    }
  }
`;

const theme = {
  primary: 'darkblue',
  secondary: 'lightblue',
};

const Styles: React.FC<React.PropsWithChildren<{}>> = ({ children }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    {children}
  </ThemeProvider>
);

export default Styles;
