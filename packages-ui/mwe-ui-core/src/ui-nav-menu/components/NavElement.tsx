import { NavItem } from './types/types';

export default function NavElement({ label, href, icon }: NavItem) {
    return (
        <li className="list-none">
            <a 
                href={href} 
                className="flex items-center gap-2 px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors"
            >
                {icon && <span className="text-xl">{icon}</span>}
                <span className="font-medium">{label}</span>
            </a>
        </li>
    );
}
