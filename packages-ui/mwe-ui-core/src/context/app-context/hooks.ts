import { useContext } from 'react';
import { AppContextRootContext } from './components/AppContextRootProvider';

export function useAppContext() {
    const context = useContext(AppContextRootContext);
    if (!context) {
        throw new Error('useAppContext must be used within an AppContextRootProvider');
    }
    return context;
}
