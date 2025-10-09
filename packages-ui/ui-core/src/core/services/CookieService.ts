export interface CookieConsentData {
    acceptAll: boolean;
    acceptAdvertisement: boolean;
}

const cookie_key = 'cookie-consent';

export const CookieService = {
    save: (data: CookieConsentData) => {
        console.log(data);
        localStorage.setItem(cookie_key, JSON.stringify(data));
    },

    get: (): CookieConsentData | null => {
        const raw = localStorage.getItem(cookie_key);
        if (!raw) {
            return null;
        }
        try {
            return JSON.parse(raw) as CookieConsentData;
        } catch {
            return null;
        }
    },
};
