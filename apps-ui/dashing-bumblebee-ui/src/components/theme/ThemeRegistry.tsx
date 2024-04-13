"use client";

import * as React from "react";
import { Theme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import NextAppDirEmotionCacheProvider from "./EmotionCache";
import { createTheme } from "@mui/material";
import { ApplicationTheme } from "./ApplicationTheme";

const ThemeRegistry: React.FC<React.PropsWithChildren> = (props) => {
  const { children } = props;
  const baseTheme = createTheme({});

  const appTheme: Theme = createTheme(baseTheme, { ...ApplicationTheme });

  return (
    <NextAppDirEmotionCacheProvider options={{ key: "mui" }}>
      <ThemeProvider theme={appTheme}>
        <CssBaseline enableColorScheme />
        {children}
      </ThemeProvider>
    </NextAppDirEmotionCacheProvider>
  );
};

export default ThemeRegistry;
