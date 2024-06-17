import React from 'react';
import { NavSegmentLeaf } from '../types';

export type NavElementProps = {
    navSegmentLeaf: NavSegmentLeaf;
};

/**
 * NavElement
 *
 * This component renders a single NavElement, if icon is passed in it will render it, if not it will render an image component.
 *
 */

const NavElement: React.FC<NavElementProps> = (props, key) => {
    const { navSegmentLeaf: elementData } = props;

    return (
        <li key={key} className="px-2">
            {elementData.icon ? (
                elementData.icon
            ) : (
                <img className="w-4 h-4" src={elementData.iconUrl ?? ''} alt={elementData.iconAlt ?? ''} />
            )}
            <a href={elementData.path ?? ''}>{elementData.label}</a>
        </li>
    );
};

export default NavElement;
