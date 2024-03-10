import { AppShell, StyledLayout, AppHeader, NavBar } from '@molitio/ui-core__deprecated';
import { createTheme } from '@mui/material';
import { GreenBrickContextRoot } from '../context';
import { GreenBrickTheme } from '../theme';
import MuiThemeProvider from './MuiThemeProvider';
import React from 'react';

const GreenBrickLayout: React.FC<React.PropsWithChildren> = (props) => {
    const { children } = props;
    const muiDefault = createTheme();

    const appTheme = createTheme(muiDefault, {
        ...GreenBrickTheme,
    });

    return (
        <AppShell
            applyGlobalStyleRules={true}
            externalTheme={appTheme}
            externalAppContextRoot={GreenBrickContextRoot}
            fontFamily="'Anton, sans-serif'"
            fontFamilyHref="https://fonts.googleapis.com/css2?family=Anton&display=swap"
        >
            <MuiThemeProvider externalTheme={appTheme}>
                <StyledLayout>
                    <AppHeader />
                    <NavBar height={appTheme?.dimensions?.header?.height} />
                    {children}
                </StyledLayout>
            </MuiThemeProvider>
        </AppShell>
    );
};

export default GreenBrickLayout;
