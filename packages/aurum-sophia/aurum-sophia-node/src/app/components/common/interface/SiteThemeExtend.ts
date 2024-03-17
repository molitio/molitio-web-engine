import { Theme } from '@material-ui/core';

export interface SiteTheme extends Theme {
    isEnabled: boolean;
    hooverActionOn?: {
        boxShadow: string;
    };
    hooverActionOff?: {
        boxShadow: string;
    };
    themeBackgroundImage: {
        imageUrl: string;
        opacity: number;
    };
    themeGradientBackground: {
        background: string;
    };
    themeIcon: {
        fontIcon: string;
    };
    devOutline: {
        border: string;
        borderStyle: string;
        borderColor: string;
    };
}

declare module '@material-ui/core/' {
    interface Theme {
        isEnabled: boolean;
        hooverActionOn?: {
            boxShadow: string;
        };
        hooverActionOff?: {
            boxShadow: string;
        };
        themeBackgroundImage: {
            imageUrl: string;
            opacity: number;
        };
        themeGradientBackground: {
            background: string;
        };
        themeIcon: {
            fontIcon: string;
        };
        devOutline: {
            border: string;
            borderStyle: string;
            borderColor: string;
        };
    }
    // allow configuration using `createTheme`
    interface ThemeOptions {
        isEnabled: boolean;
        hooverAction?: {
            boxShadow: string;
        };
        nonHovered?: {
            boxShadow: string;
        };
        themeBackgroundImage: {
            imageUrl: string;
            opacity: number;
        };
        themeGradientBackground: {
            background: string;
        };
        themeIcon: {
            fontIcon: string;
        };
        devOutline: {
            border: string;
            borderStyle: string;
            borderColor: string;
        };
    }
}

declare module '@material-ui/core/styles/createBreakpoints' {
    interface BreakpointOverrides {
        xs: true; // removes the `xs` breakpoint
        sm: true;
        md: true;
        lg: true;
        xl: true;
        tablet: false; // adds the `tablet` breakpoint
        laptop: false;
        desktop: false;
    }
}
