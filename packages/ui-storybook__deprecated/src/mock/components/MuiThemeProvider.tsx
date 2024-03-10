import { createTheme, ThemeProvider } from '@mui/material';

// TODO need to add missing props to extend SystemTheme
declare module '@mui/material' {
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
            footer: {
                height: string;
            };
        };
    }
}

const MuiThemeProvider: React.FC<React.PropsWithChildren<any>> = (props) => {
    const { children, externalTheme } = props;

    return <ThemeProvider theme={externalTheme ?? createTheme()}>{children} </ThemeProvider>;
};

export default MuiThemeProvider;
