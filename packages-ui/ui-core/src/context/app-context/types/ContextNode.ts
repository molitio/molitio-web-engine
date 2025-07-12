import { NavigationSegment } from './NavRoot';

export type ContextNodeType = 'nav' | 'text' | 'media' | 'root' | string;

export type ContextNode = {
    resourceId: string;
    type: ContextNodeType;
    navigation?: NavigationSegment;
    textContent?: TextContentSegment;
    mediaResource?: MediaResourceSegment;
    children?: Record<string, ContextNode>;
};
