import { ContextNode } from './ContextNode';

export type AppContext = {
    appId: string;
    appName: string;
    appDisplayTitle?: string;
    appVersion?: string;
    nodeTree?: Record<string, ContextNode>;
};
