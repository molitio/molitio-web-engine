import type { AppProps } from 'next/app';
import Script from 'next/script';
import { createTheme, ThemeProvider } from '@mui/material';
import { AppShell } from '@molitio/ui-core';
import { ApplicationContextRoot, ApplicationTheme } from '../context';
import { GlobalStyle } from '../globalStyle';
import { Layout } from '../components/common';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

export default function App({ Component, pageProps }: AppProps) {
    const muiDefault = createTheme();
    const appTheme = createTheme(muiDefault, { ...ApplicationTheme });

    //TODO: theme management should be fix in ui-core
    return (
        <AppShell externalAppContextRoot={ApplicationContextRoot} externalTheme={appTheme}>
            <StyledThemeProvider theme={appTheme}>
                <ThemeProvider theme={appTheme}>
                    <Layout>
                        <GlobalStyle />
                        <Script
                            strategy="lazyOnload"
                            src={`https://www.google.com/recaptcha/enterprise.js?render=${process?.env?.NEXT_PUBLIC_GOOGLE_RECAPTCHA_SITE_KEY}`}
                        />
                        <Component {...pageProps} />
                    </Layout>
                </ThemeProvider>
            </StyledThemeProvider>
        </AppShell>
    );
}
