'use client';

import { ReactNode, createContext } from 'react';
import { AppContext } from '../types';

type AppContextRootValues = {
    ctx: AppContext;
};

type AppContextRootProviderProps = AppContextRootValues & { children?: ReactNode };

export const AppContextRootContext = createContext<AppContext | undefined>(undefined);

export default function AppContextRootProvider({ ctx, children }: AppContextRootProviderProps) {
    const defaultAppContext: AppContext = {
        ...ctx,
        appId: ctx?.appId || 'default-app-id',
        appName: ctx?.appName || 'Default App',
    };
    const aggregatedAppContext = { ...defaultAppContext };
    return <AppContextRootContext.Provider value={aggregatedAppContext}>{children}</AppContextRootContext.Provider>;
}
