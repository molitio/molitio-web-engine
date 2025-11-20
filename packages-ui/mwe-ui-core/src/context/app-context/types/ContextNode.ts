export type ContextNodeType = 'page' | 'folder';

export interface ContextNode {
    id: string;
    slug: string;
    title: string;
    type: ContextNodeType;
    content?: {
        _ref: string;
        _type: string;
        [key: string]: any;
    };
    children?: ContextNode[];
}
