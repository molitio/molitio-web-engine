import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
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
                <Image src={elementData.iconUrl ?? ''} width={20} height={20} alt={elementData.iconAlt ?? ''} />
            )}
            <Link href={elementData.path ?? ''}>{elementData.label}</Link>
        </li>
    );
};

export default NavElement;
