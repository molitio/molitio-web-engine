import { atom, createStore } from 'jotai';

export const contextRootAtom = <T>(initialValue: T) => atom<T>(initialValue);

export const contextRootAtomRW = <T>() =>
    atom(
        (get) => get(contextRootAtom<T>(undefined as unknown as T)),
        (get, set, contextRootState: T) => {
            set(contextRootAtom<T>(undefined as unknown as T), contextRootState);
        },
    );

export function initContentRootStore<T>(contextRoot: T) {
    const contextRootStore = createStore();
    const atomRW = contextRootAtomRW<T>();
    contextRootStore.set(atomRW, { ...contextRoot });
    return contextRootStore;
}
