import { SiteThemeCollection } from './collection/SiteThemeCollection';
import { FeatureCollection } from './collection/FeatureCollection';
import { ComponentCollection } from './collection/ComponentCollection';
import { IconCollection } from './collection/IconCollection';
import { SiteErrorCollection } from './collection/SiteErrorCollection';

export interface SiteContext {
    themeContext: SiteThemeCollection;
    featureContext: FeatureCollection;
    componentContext: ComponentCollection;
    iconContext: IconCollection;
    errorContext: SiteErrorCollection;
}
