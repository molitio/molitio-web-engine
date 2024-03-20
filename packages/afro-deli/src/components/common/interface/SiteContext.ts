import { SiteThemeCollection } from '../interface/collection/SiteThemeCollection';
import { FeatureCollection } from '../interface/collection/FeatureCollection';
import { ComponentCollection } from '../interface/collection/ComponentCollection';
import { IconCollection } from '../interface/collection/IconCollection';
import { SiteErrorCollection } from '../interface/collection/SiteErrorCollection';

export interface SiteContext {
    themeContext: SiteThemeCollection;
    featureContext: FeatureCollection;
    componentContext: ComponentCollection;
    iconContext: IconCollection;
    errorContext: SiteErrorCollection;
}
