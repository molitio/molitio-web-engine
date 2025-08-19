import { ContextNode } from './ContextNode';

export type AppContext = {
    appName: string;
    appId: string;
    appVersion?: string;
    appLogoUrl?: string;
    appLogoAlt?: string;
    nodeTree?: Record<string, ContextNode>;
};
