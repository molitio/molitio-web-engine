import { atom, createStore } from 'jotai';
import { NavRoot } from '../../ui-nav-menu';

const navMenuStore = createStore();
export const navMenuAtom = atom<NavRoot>({});

export const navMenuAtomRW = atom(
    (get) => get(navMenuAtom),
    (get, set, navRootState: NavRoot) => {
        set(navMenuAtom, navRootState);
    },
);


async function initNavMenuStore(navMenuStore: any): Promise<void> {
    navMenuStore.set(navMenuAtomRW, {});
    await Promise.resolve();
}

export default initNavMenuStore(navMenuStore)