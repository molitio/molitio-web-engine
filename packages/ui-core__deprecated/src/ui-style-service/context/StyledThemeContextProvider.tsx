import React from 'react';
import { ThemeProvider } from 'styled-components';
import { ThemeContext } from '../../ui-common';
import { useMolitioTheme } from '../hooks/ThemeContextStore';
import { ThemeNameTags } from '../tags';

type StyledThemeContextProviderProps = ThemeContext &
    React.PropsWithChildren & {
        externalTheme?: any;
    };

/***
 * @description StyledThemeContextProvider expects a theme object or a theme identifier. If theme is provided it will
 * be used as system theme, if not provided it will look for a theme identifier to resolve a system theme.
 */

const StyledThemeContextProvider = <TExternalTheme,>(props: StyledThemeContextProviderProps) => {
    const { externalTheme, themeIdentifier, children } = props;

    const systemTheme = useMolitioTheme({ themeNameTag: themeIdentifier?.themeNameTag ?? ThemeNameTags.DEFAULT });

    const theme = externalTheme ? (externalTheme as TExternalTheme) : systemTheme.theme;

    return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default StyledThemeContextProvider;
