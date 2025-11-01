export type CookieConsentData = Record<string, boolean>;

const cookie_key = 'cookie-consent';

const isLocalStorageAvailable = (): boolean => {
    try {
        const testKey = '__localStorage_test__';
        localStorage.setItem(testKey, 'test');
        localStorage.removeItem(testKey);
        return true;
    } catch {
        return false;
    }
};

import * as yup from 'yup';

const cookieConsentSchema = yup
    .object()
    .test(
        'boolean-values',
        'All values must be booleans',
        (value) => value && typeof value === 'object' && Object.values(value).every((v) => typeof v === 'boolean'),
    );

const isValidCookieConsentData = (data: any): data is CookieConsentData => {
    return cookieConsentSchema.isValidSync(data);
};

export const CookieService = {
    save: (data: CookieConsentData) => {
        if (!isLocalStorageAvailable()) return;
        try {
            localStorage.setItem(cookie_key, JSON.stringify(data));
        } catch {
            // Silent fail
        }
    },

    get: (): CookieConsentData | null => {
        if (!isLocalStorageAvailable()) return null;
        const raw = localStorage.getItem(cookie_key);
        if (!raw) return null;
        try {
            const parsed = JSON.parse(raw);
            if (!isValidCookieConsentData(parsed)) {
                localStorage.removeItem(cookie_key);
                return null;
            }
            return parsed;
        } catch {
            localStorage.removeItem(cookie_key);
            return null;
        }
    },

    isAccepted: (cookieId: string): boolean => {
        const data = CookieService.get();
        return !!data?.[cookieId];
    },
};
