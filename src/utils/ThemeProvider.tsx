import { createTheme, ThemeProvider } from '@mui/material';
import * as React from 'react';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#F95700',
    },
    secondary: {
      main: '#00A4CC',
    },
    common: {
      black: '#2D2D2D',
      white: '#FFFFFF',
    },
    warning: {
      main: '#818181',
    },
    info: {
      main: '#F6F6F6',
    },
    error: {
      main: '#FFCAAE',
    },
  },
});
export function Example({ children }: { children: React.ReactNode }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
