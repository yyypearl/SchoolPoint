import { withThemeFromJSXProvider } from '@storybook/addon-themes';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import {theme} from "../src/styles/theme";

const GlobalStyles = createGlobalStyle`
  * {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

html,
body {
  max-width: 100vw;
  overflow-x: hidden;
  font-family: "Pretendard";
  width: 360px;
  height: 800px;

  @media (max-width: 360px) {
    font-size: 14px;
  }
}

a {
  color: inherit;
  text-decoration: none;
}
`;

export const decorators = [
  withThemeFromJSXProvider({
    GlobalStyles,
    themes: {
      color: theme
    },
    Provider: ThemeProvider,
  }),
];
