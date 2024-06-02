import React from 'react';
import Link from 'next/link';
import { NavElementData } from '../types';

export type NavElementProps = {
    elementData: NavElementData;
};

const NavElement: React.FC<NavElementProps> = (props, key) => {
    const { elementData } = props;

    return (
        <li key={key} className="px-2">
            <Link href={elementData.href ?? ''}>{elementData.text}</Link>
        </li>
    );
};

export default NavElement;
