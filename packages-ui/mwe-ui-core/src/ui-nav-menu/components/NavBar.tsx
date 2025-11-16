import { NavMenuProps } from './NavMenu';

export type NavBarProps = {
    headerText?: string;
    navMenu: React.ReactNode;
};

export default function NavBar({ headerText, navMenu }: NavBarProps) {
    return (
        <nav className="sticky top-0 w-full z-5 flex direction-row items-start gap-2border border-primary">
            <section className="flex direction-row gap-1 px-2">
                <div>LOGO</div>
                <h4 className="text-primary">{headerText}</h4>
            </section>
            {navMenu}
        </nav>
    );
}
