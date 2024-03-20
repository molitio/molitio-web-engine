import { TError } from '../components/common/type/TError';

export const getSiteErrorCollection = (): Map<string, TError> =>
    new Map<string, TError>([
        [
            '404',
            {
                code: 404,
                description: 'Navigációs hiba',
                message: 'A keresett oldal nem található...',
            },
        ],
        [
            '500',
            {
                code: 500,
                description: 'Belső hiba',
                message: 'Hiba lépett fel az alkalmazás működésében...',
            },
        ],
        [
            '401',
            {
                code: 401,
                description: 'Hiányzó jogosultság',
                message: 'Nincs jogosultság az oldal eléréséhez',
            },
        ],
    ]);
