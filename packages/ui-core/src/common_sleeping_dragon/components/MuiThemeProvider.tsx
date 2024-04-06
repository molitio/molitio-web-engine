import React from "react";
import { useTheme } from "@mui/material";
import { ThemeProvider } from "styled-components";

declare module "@mui/material" {
  export interface TypeBackground {
    background: {
      inverse?: string;
    };
  }
  export interface Theme {
    dimensions: {
      page: {
        height: string;
      };
      header: {
        height: string;
      };
    };
  }
}

const MuiThemeProvider: React.FC<React.PropsWithChildren<any>> = (props) => {
  const { children } = props;

  const theme = useTheme();

  return <ThemeProvider theme={theme}>{children} </ThemeProvider>;
};

export default MuiThemeProvider;
