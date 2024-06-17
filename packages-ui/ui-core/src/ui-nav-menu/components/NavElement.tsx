import React from 'react';
import { NavElementData } from '../types';

export type NavElementProps = {
    elementData: NavElementData;
};

const NavElement: React.FC<NavElementProps> = (props, key) => {
    const { elementData } = props;

    return (
        <li key={key} className="px-2">
            <a href={elementData.href ?? ''}>{elementData.text}</a>
        </li>
    );
};

export default NavElement;
