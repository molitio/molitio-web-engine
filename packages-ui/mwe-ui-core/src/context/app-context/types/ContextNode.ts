import { SupportedLocale } from '../../../ui-app';

export type ContextNodeType = 'page' | 'folder';

export type LocalizedContent = Partial<
    Record<
        SupportedLocale,
        {
            _ref: string;
            _type: string;
            [key: string]: unknown;
        }
    >
>;

export interface ContextNode {
    id: string;
    slug: string;
    title: string;
    type: ContextNodeType;
    content?: LocalizedContent;
    children?: ContextNode[];
}
