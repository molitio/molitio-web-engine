import { TIcon } from '../components/common/type/TIcon';
/*     icon repository: https://fonts.google.com/icons?selected=Material+Icons */

export const getSiteIconCollection = (): Map<string, TIcon> =>
    new Map<string, TIcon>([
        [
            'report_Problem',
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
    ]);

export const getFeatureIconCollection = (): Map<string, TIcon> =>
    new Map<string, TIcon>([
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
    ]);
