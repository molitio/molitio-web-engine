import { SiteIcon } from './SiteIcon';

export interface SiteFeature {
    id: string;
    name: string;
    displayName: string;
    isEnabled: boolean;
    isNavOption: boolean;
    path: string;
    icon?: SiteIcon;
    component?: JSX.Element;
}
