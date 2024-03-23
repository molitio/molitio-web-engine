import { TFeature } from '../type/TFeature';

export interface IFeatureRouteProps {
    siteFeature: TFeature;
    siteComponent: () => JSX.Element;
}
