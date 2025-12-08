import { NavItem } from './types/types';

export default function NavElement({ label, href, icon, isActive }: NavItem) {
    return (
        <li className="list-none">
            <a 
                href={href} 
                className={`flex items-center gap-2 px-3 py-2 rounded-md transition-colors ${
                    isActive 
                        ? 'text-blue-600 bg-blue-50 font-semibold' 
                        : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                }`}
            >
                {icon && <span className="text-xl">{icon}</span>}
                <span className="font-medium">{label}</span>
            </a>
        </li>
    );
}
