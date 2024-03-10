import { Category } from './Category';

export type Gallery = {
    name: string;
    categories?: Record<string, Category>;
};
