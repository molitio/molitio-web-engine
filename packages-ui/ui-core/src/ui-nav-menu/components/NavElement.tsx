import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { NavElementData } from '../types';

export type NavElementProps = {
    elementData: NavElementData;
};

/**
 * NavElement
 *
 * This component renders a single NavElement, if icon is passed in it will render it, if not it will render an image component.
 *
 */

const NavElement: React.FC<NavElementProps> = (props, key) => {
    const { elementData } = props;

    return (
        <li key={key} className="px-2">
            {elementData.iconSvg ? (
                elementData.iconSvg
            ) : (
                <Image src={elementData.iconSvg ?? ''} width={20} height={20} alt={elementData.iconAlt ?? ''} />
            )}
            <Link href={elementData.href ?? ''}>{elementData.label}</Link>
        </li>
    );
};

export default NavElement;
