import { SupportedLocale } from '../../../ui-app';

export type ContextNodeType = 'page' | 'folder';

export interface ContextNode {
    id: string;
    slug: string;
    title: string;
    type: ContextNodeType;
    language: SupportedLocale;
    content?: {
        _ref: string;
        _type: string;
        [key: string]: unknown;
    };
    children?: ContextNode[];
}
