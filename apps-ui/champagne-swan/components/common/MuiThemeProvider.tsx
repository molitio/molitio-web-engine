/* eslint-disable @typescript-eslint/no-explicit-any */
import { createTheme } from "@mui/material";
import { ThemeProvider } from "styled-components";
import { Visual } from "./types";
declare module "@mui/material" {
  export interface Palette {
    stars?: {
      [key: string]: string;
    };
    gradient?: {
      [key: string]: string;
    };
    visual?: Record<string, Visual>;
  }
  export interface TypeBackground {
    background: {
      [key: string]: string;
    };
  }
  export interface TypeText {
    [key: string]: string;
  }

  export interface Theme {
    background: {
      [key: string]: string;
    };

    dimensions: {
      page: {
        height: string;
      };
      header: {
        height: string;
      };
      footer: {
        height: string;
      };
    };
  }
}

const MuiThemeProvider: React.FC<React.PropsWithChildren<any>> = (props) => {
  const { children, externalTheme } = props;

  return (
    <ThemeProvider theme={externalTheme ?? createTheme()}>
      {children}
    </ThemeProvider>
  );
};

export default MuiThemeProvider;
