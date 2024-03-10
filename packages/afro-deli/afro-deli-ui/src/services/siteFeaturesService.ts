import { SiteFeature } from '../components/common/interface/SiteFeature';
import { FeatureCollection } from '../components/common/interface/collection/FeatureCollection';

export const deafultSiteFeature = {
    id: '',
    name: '',
    displayName: '',
    isEnabled: false,
    isNavOption: false,
    path: '',
    icon: { fontIcon: '' },
};

export const siteEnabledFeaturesCollection: FeatureCollection = {
    features: new Map<string, SiteFeature>([
        [
            'breakfast',
            {
                id: 'null1',
                name: 'breakfast',
                displayName: 'Breakfast',
                path: '/breakfast',
                isEnabled: true,
                isNavOption: true,
            },
        ],
        [
            'vegetables',
            {
                id: 'null2',
                name: 'vegetables',
                displayName: 'Vegetables',
                path: '/vegetables',
                isEnabled: true,
                isNavOption: true,
            },
        ],
    ]),
};
