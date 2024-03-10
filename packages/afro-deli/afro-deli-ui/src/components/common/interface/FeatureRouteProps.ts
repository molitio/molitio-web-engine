import { SiteFeature } from './SiteFeature';

export interface FeatureRouteProps {
    siteFeature: SiteFeature;
    siteComponent: () => JSX.Element | undefined;
}
