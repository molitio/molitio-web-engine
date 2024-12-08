import { atom, createStore } from 'jotai';
import { InteractivityRoot } from './types';

export const interactivityRootAtom = atom<InteractivityRoot>({});

export const interactivityRootAtomRW = atom(
    (get) => get(interactivityRootAtom),
    (get, set, interactivityRootState: InteractivityRoot) => {
        get(interactivityRootAtom);
        set(interactivityRootAtom, interactivityRootState);
    },
);

export function initInteractivityRootStore(interactivityRoot: InteractivityRoot) {
    const navMenuStore = createStore();
    navMenuStore.set(interactivityRootAtomRW , { ...interactivityRoot });
    //TODO: extend validation to navRoot type
    return navMenuStore;
}
