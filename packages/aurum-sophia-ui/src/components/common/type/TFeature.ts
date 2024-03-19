import { TIcon } from './TIcon';

export type TFeature = {
    id: string;
    name: string;
    displayName: string;
    isRedirect: boolean;
    isEnabled: boolean;
    isNavOption: boolean;
    path: string;
    icon?: TIcon;
    component?: (P?: {}) => React.ReactNode;
};
