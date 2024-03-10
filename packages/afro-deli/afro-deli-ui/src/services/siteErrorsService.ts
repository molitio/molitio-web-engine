import { SiteError } from '../components/common/interface/SiteError';
import { SiteErrorCollection } from '../components/common/interface/collection/SiteErrorCollection';

export const siteErrorCollection: SiteErrorCollection = {
    errors: new Map<string, SiteError>([
        [
            '404',
            {
                errorData: {
                    code: 404,
                    description: 'Navigációs hiba',
                    message: 'A keresett oldal nem található...',
                },
            },
        ],
        [
            '500',
            {
                errorData: {
                    code: 500,
                    description: 'Belső hiba',
                    message: 'Hiba lépett fel az alkalmazás működésében...',
                },
            },
        ],
        [
            '401',
            {
                errorData: {
                    code: 401,
                    description: 'Hiányzó jogosultság',
                    message: 'Nincs jogosultság az oldal eléréséhez',
                },
            },
        ],
    ]),
};
