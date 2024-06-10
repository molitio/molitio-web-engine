import { NavRoot } from "../../../ui-nav-menu";

export type NavMenu = {
    navRoot?: NavRoot;
    navMenuControlState?: NavMenuControlState;
}

export type NavMenuControlState = {
    navMenuOpen: boolean;
};
