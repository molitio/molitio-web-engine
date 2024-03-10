import { IconCollection } from '../components/common/interface/collection/IconCollection';
import { SiteIcon } from '../components/common/interface/SiteIcon';
/*     icon repository: https://fonts.google.com/icons?selected=Material+Icons */

export const siteIconCollection: IconCollection = {
    defaultIcon: { fontIcon: 'report_problem' },
    icons: new Map<string, SiteIcon>([
        [
            'reportProblem',
            {
                fontIcon: 'report_problem',
            },
        ],
        [
            'menu',
            {
                fontIcon: 'menu',
            },
        ],
        [
            'wbSunny',
            {
                fontIcon: 'wb_sunny',
            },
        ],
        [
            'water',
            {
                fontIcon: 'water',
            },
        ],
        [
            'cloudQueue',
            {
                fontIcon: 'cloud_queue',
            },
        ],
    ]),
};

export const featureIconCollection: IconCollection = {
    defaultIcon: { fontIcon: 'report_problem' },
    icons: new Map<string, SiteIcon>([
        [
            'actuals',
            {
                fontIcon: 'event_note',
            },
        ],

        [
            'about',
            {
                fontIcon: 'info',
            },
        ],
        [
            'events',
            {
                fontIcon: 'events',
            },
        ],
        [
            'connect',
            {
                fontIcon: 'share',
            },
        ],
        [
            'contact',
            {
                fontIcon: 'contact_support',
            },
        ],
        [
            'downloads',
            {
                fontIcon: 'downloads',
            },
        ],
        [
            'media',
            {
                fontIcon: 'media',
            },
        ],
        [
            'classes',
            {
                fontIcon: 'classes',
            },
        ],
        [
            'publications',
            {
                fontIcon: 'publications',
            },
        ],
        [
            'webshop',
            {
                fontIcon: 'webshop',
            },
        ],
    ]),
};
