import React from "react";
import styled from "styled-components";
import { createTheme, Theme, ThemeProvider } from "@mui/material";
import MuiThemeProvider from "./MuiThemeProvider";
import { AppShell, MolitioNavBar } from "@molitio/ui-core";
import { mockData } from "./mockData";

const StyledLayout = styled.div`
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const StyledContainer: React.FC<React.PropsWithChildren<any>> = (props) => {
  const { children } = props;
  return <StyledLayout>{children}</StyledLayout>;
};

const Layout: React.FC<React.PropsWithChildren<any>> = (props) => {
  const { children } = props;

  const muiDefault: Theme = createTheme();

  const appTheme = createTheme(muiDefault, {
    palette: {
      primary: {
        main: "rgba(36, 171, 14, 0.5)",
      },
      background: {
        default: "rgba(45, 45, 45, 0.8)",
        inverse: "#fff",
        footer: "#000",
        menu: "rgb(44, 108, 43)",
      },
      text: {
        primary: "#fff",
      },
    },
    dimensions: {
      page: {
        height: "930px",
      },
      header: {
        height: "5em",
      },
    },
  });

  return (
    <AppShell
      externalTheme={appTheme}
      externalAppContextRoot={mockData}
      applyGlobalStyleRules
      fontFamily="'OpenSans', sans-serif"
      /*  fontFamilyHref="https://fonts.googleapis.com/css2?family=Jura&family=Tenor+Sans&display=swap" */
    >
      <MuiThemeProvider theme={appTheme}>
        {/*         <MolitioNavBar /> */}
        {children}
      </MuiThemeProvider>
    </AppShell>
  );
};

export default Layout;
