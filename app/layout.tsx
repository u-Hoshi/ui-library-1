"use client";

import { ThemeProvider } from "@mui/material";

import { theme } from "@/src/utils/ThemeProvider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <ThemeProvider theme={theme}>
        <body>{children}</body>
      </ThemeProvider>
    </html>
  );
}
