import React from 'react';
import { DeviceContextProvider, usePlatform } from '../../ui-platform';
import { StyledThemeContextProvider, SystemThemeIdentifier } from '../../ui-style-service';
import { SystemContextProvider } from '../context';
import { StyledGlobalStyle } from '../styles';
import { AppContext, SystemContentLeaf, SystemContentRoot, SystemNavRoot } from '../types';

type AppShellProps<TExternalTheme> = React.PropsWithChildren & {
    applyGlobalStyleRules?: boolean;
    fontFamily?: string;
    fontFamilyHref?: string;
    themeIdentifier?: SystemThemeIdentifier;
    externalTheme?: TExternalTheme;
    externalAppContextRoot?: AppContext<SystemNavRoot, SystemContentRoot<SystemContentLeaf>>;
};
/**
 * AppShell provides a wrapper around componets and pages to provide theme context and global style rules
 *
 * @type {AppShellProps}
 *
 * @param {boolean?} applyGlobalStyleRules
 * @param {string?} fontFamily
 * @param {string?} fontFamilyHref
 * @param {SystemThemeIdentifier?} themeIdentifier
 * @param {TExternalTheme} externalTheme
 * @param {AppContext<SystemNavRoot, SystemContentRoot<SystemContentLeaf>>} externalAppContextRoot
 *
 */

const AppShell = <TExternalTheme,>(props: AppShellProps<TExternalTheme>) => {
    const { children, themeIdentifier, applyGlobalStyleRules, fontFamilyHref, externalTheme, externalAppContextRoot } =
        props;

    const { isClient } = usePlatform();

    if (isClient()) {
        const head = document.querySelector('head');
        const fontFamilyCssLink = document.createElement('link');
        fontFamilyCssLink.type = 'text/css';
        fontFamilyCssLink.rel = 'stylesheet';
        fontFamilyCssLink.href = fontFamilyHref ? fontFamilyHref : 'https://fonts.googleapis.com/css?family=Open Sans';
        if (head) {
            head.appendChild(fontFamilyCssLink);
        }
    }

    const appContext: AppContext<SystemNavRoot, SystemContentRoot<SystemContentLeaf>> = externalAppContextRoot ?? {
        appName: 'Molitio System',
    };
    return (
        <React.StrictMode>
            <DeviceContextProvider>
                <StyledThemeContextProvider<TExternalTheme>
                    externalTheme={externalTheme}
                    themeIdentifier={themeIdentifier}
                >
                    <SystemContextProvider {...appContext}>
                        {applyGlobalStyleRules ? <StyledGlobalStyle /> : <></>}
                        {children}
                    </SystemContextProvider>
                </StyledThemeContextProvider>
            </DeviceContextProvider>
        </React.StrictMode>
    );
};

export default AppShell;
