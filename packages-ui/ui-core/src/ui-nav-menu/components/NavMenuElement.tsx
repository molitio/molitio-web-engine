import React from 'react';
import { NavSegmentLeaf } from '../../context';
import '../styles/navbar.css';
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
    // Get the container element

    return (
        <div className="btn">
            <li key={key}>
                {elementData.iconUrl ? (
                    elementData.iconUrl
                ) : (
                    <img className="w-4 h-4" src={elementData.iconUrl ?? ''} />
                )}
                <a href={elementData.path ?? ''}>{elementData.label}</a>
            </li>
        </div>
    );
};

export default NavElement;
