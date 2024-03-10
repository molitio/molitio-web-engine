import React from 'react';
/* import { Theme, ThemeProvider } from '@mui/material'; */
/* import { AppShellProps } from '../types'; */

/* export default function AppShell(props: AppShellProps<Theme>) { */
export const AppShell: React.FC<React.PropsWithChildren> = (props) => {
    /*    const { children, theme } = props; */

    const { children } = props;

    /* <ThemeProvider theme={theme}> */
    /* TODO: global style inject needed?             <StyledGlobal /> */
    return <div>{children}</div>;
};

export default AppShell;
