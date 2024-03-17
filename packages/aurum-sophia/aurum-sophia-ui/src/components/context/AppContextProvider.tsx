import React from 'react';
import { ThemeProvider } from '@material-ui/core';
import { sitePageContentCollection as getSiteContentCollection } from '../../services/siteContentService';
import { getSiteFeatureCollection } from '../../services/siteFeaturesService';
import { getSiteFeatureComponents } from '../../services/siteComponentService';
import { getSiteErrorCollection } from '../../services/siteErrorsService';
import { getFeatureIconCollection, getSiteIconCollection } from '../../services/siteIconService';
import { getSiteThemeCollection } from '../../services/siteThemeService';
import { TPageContent } from '../common/type/TPageContent';
import { AppContextProviderProps } from './interface/AppContextProviderProps';
import { AppContext, SiteContextDefaults, SiteDefaultTheme, SiteMolitioId } from '../../services/siteDefaultsService';
import { TAppContext } from './interface/AppContext';

export const AppContextProvider: React.FC<AppContextProviderProps> = ({ children }: AppContextProviderProps) => {
    const [selectedTheme, setSelectedTheme] = React.useState(SiteDefaultTheme);
    const [appContext, setAppContext] = React.useState<TAppContext>(SiteContextDefaults);
    const [isContentLoaded, setIsContentLoaded] = React.useState(true);
    const [isImageBackgroundEnabled, setIsImageBackgroundEnabled] = React.useState(true);

    React.useEffect(() => {
        loadData();
        async function loadData() {
            try {
                const themes = getSiteThemeCollection();
                const content = getSiteContentCollection();
                const siteIcons = getSiteIconCollection();
                const featureIcons = getFeatureIconCollection();
                const errors = getSiteErrorCollection();
                const components = getSiteFeatureComponents();
                const features = getSiteFeatureCollection();

                const contexValues = await Promise.all([
                    themes,
                    content,
                    siteIcons,
                    featureIcons,
                    errors,
                    components,
                    features,
                ]);

                const context = {
                    themeCollection: contexValues[0],
                    contentCollection: contexValues[1] ? contexValues[1] : new Map<string, TPageContent>(),
                    siteIconCollection: contexValues[2],
                    featureIconCollection: contexValues[3],
                    errorCollection: contexValues[4],
                    componentCollection: contexValues[5],
                    featureCollection: contexValues[6],
                };

                setAppContext(context);
                setIsContentLoaded(true);
            } catch (error) {
                //TODO; log error
            }
        }
    }, [isContentLoaded, setSelectedTheme]);

    return (
        <>
            <AppContext.Provider
                value={{
                    molitioId: SiteMolitioId,
                    ...appContext,
                    selectedTheme: selectedTheme,
                    setSelectedTheme: setSelectedTheme,
                    isImageBackgroundEnabled: isImageBackgroundEnabled,
                    setIsImageBackgroundEnabled: setIsImageBackgroundEnabled,
                }}
            >
                <ThemeProvider theme={selectedTheme ? selectedTheme : SiteDefaultTheme}>{children}</ThemeProvider>
            </AppContext.Provider>
        </>
    );
};
