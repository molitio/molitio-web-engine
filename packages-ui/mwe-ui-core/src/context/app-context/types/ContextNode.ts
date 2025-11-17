import { TextContentNode } from './TextContentSegment';
import { NavigationSegment } from './NavigationSegment';

export type ContextNodeType = 'element' | 'nav' | 'text' | 'media' | 'root' | string;

export type ContextNode = {
    resourceId: string;
    type: ContextNodeType;
    navigation?: NavigationSegment;
    textContent?: Record<string, TextContentNode>;
    nodeTree?: Record<string, ContextNode>;
};
