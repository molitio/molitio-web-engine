import { atom, createStore } from 'jotai';
import { InteractivityRoot } from './types';

export const InteractivityRootAtom = atom<InteractivityRoot>({});

export const InteractivityRootAtomRW = atom(
    (get) => get(InteractivityRootAtom),
    (get, set, interactivityRootState: InteractivityRoot) => {
        get(InteractivityRootAtom);
        set(InteractivityRootAtom, interactivityRootState);
    },
);
