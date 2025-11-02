import { CookieOption } from './types';

export const CookieOptions: Record<string, CookieOption> = {
    telemetry: {
        id: 'telemetry',
        description: 'Accept Telemetry Cookies',
        details: 'Accept telemetry cookies. This helps us provide you with the best possible experience.',
        visible: true,
    },
    acceptAdvertisement: {
        id: 'acceptAdvertisement',
        description: 'Accept Advertisement Cookies',
        details:
            'These cookies allow us to show you personalized advertisements based on your browsing behavior and interests.',
        visible: true,
    },
    acceptTestCookies: {
        id: 'acceptTestCookies',
        description: 'Accept Test Cookies',
        details:
            'Test cookies are used for development and testing purposes. They help us ensure the website works correctly.',
        visible: true,
    },
};
