'use client';

import { ReactNode, createContext } from 'react';
import { AppContext } from '../types';
import { ComponentRegistry } from '../types/ComponentRegistry';

type AppContextRootValues = {
    ctx: AppContext;
    componentRegistry: ComponentRegistry;
};

type AppContextRootProviderProps = AppContextRootValues & { children?: ReactNode };

export const AppContextRootContext = createContext<AppContextRootValues | undefined>(undefined);

export default function AppContextRootProvider({ ctx, componentRegistry, children }: AppContextRootProviderProps) {
    const value = {
        ctx,
        componentRegistry,
    };
    return <AppContextRootContext.Provider value={value}>{children}</AppContextRootContext.Provider>;
}
