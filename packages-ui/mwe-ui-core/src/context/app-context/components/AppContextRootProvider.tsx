import { ReactNode, createContext } from 'react';
import { AppContext } from '../types';

type AppContextRootValues = {
    ctx: AppContext;
};

type AppContextRootProviderProps = AppContextRootValues & { children?: ReactNode };

export const AppContextRootContext = createContext<AppContextRootValues | undefined>(undefined);

export default function AppContextRootProvider({ ctx, children }: AppContextRootProviderProps) {
    const value = {
        ctx,
    };
    return <AppContextRootContext.Provider value={value}>{children}</AppContextRootContext.Provider>;
}
