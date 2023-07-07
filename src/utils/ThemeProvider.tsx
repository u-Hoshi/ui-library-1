import { createTheme, ThemeProvider } from '@mui/material';
import * as React from 'react';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#84A7A1',
    },
    secondary: {
      main: '#2E8A99',
    },
    common: {
      black: '#2D2D2D',
      white: '#FFFFFF',
    },
    warning: {
      main: '#1F6E8C',
    },
    info: {
      main: '#0E2954',
    },
    error: {
      main: '#FFCAAE',
    },
  },
});
export function Example({ children }: { children: React.ReactNode }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
