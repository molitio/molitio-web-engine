import { ContextNode, LocalizedContent } from './ContextNode';

export type RootNode = {
    id: string;
    title: string;
    type: 'root';
    content?: LocalizedContent;
    children?: ContextNode[];
};

export type AppContext = {
    appId: string;
    rootNode: RootNode;
};
