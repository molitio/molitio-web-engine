import { Link } from '@tanstack/react-router';
import { SupportedLocale } from '../../ui-app/constants';

export type NavMenuProps = {
    locale: SupportedLocale;
} & { children?: React.ReactNode };

export default function NavMenu({ locale, children }: NavMenuProps) {
    return (
        <section className="flex-1 flex items-center gap-3 justify-start">
            <ul className="flex direction-row justify-start gap-2">
                <li>
                    <Link to="/$locale" params={{ locale }} activeProps={{ className: 'font-bold' }}>
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="/$locale/about" params={{ locale }} activeProps={{ className: 'font-bold' }}>
                        About
                    </Link>
                </li>
                <li>
                    <Link to="/$locale/contact" params={{ locale }} activeProps={{ className: 'font-bold' }}>
                        Contact
                    </Link>
                </li>
            </ul>
            <div className="justify-end text-end flex-1 border border-accent">{children}</div>
        </section>
    );
}
