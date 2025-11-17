import * as yup from 'yup';
import { CookieConsentData } from '../types';

const cookie_key = 'cookie-consent';
const cookieConsentSchema = yup
    .object()
    .test(
        'boolean-values',
        'All values must be booleans',
        (value) => value && typeof value === 'object' && Object.values(value).every((v) => typeof v === 'boolean'),
    );

const isValidCookieConsentData = (data: CookieConsentData | unknown): data is CookieConsentData => {
    return cookieConsentSchema.isValidSync(data);
};

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

export const cookieService = {
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
        const data = cookieService.get();
        return !!data?.[cookieId];
    },
};
