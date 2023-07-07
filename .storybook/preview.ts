import type { Preview } from '@storybook/react';
import { ThemeProvider } from '@mui/material';

import { theme } from '../src/utils/ThemeProvider';

import { withThemeFromJSXProvider } from '@storybook/addon-styling';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;

export const decorators = [
  withThemeFromJSXProvider({
    themes: {
      light: theme, // 一旦は lightにthemeを設定
    },
    defaultTheme: 'light',
    Provider: ThemeProvider,
  }),
];
