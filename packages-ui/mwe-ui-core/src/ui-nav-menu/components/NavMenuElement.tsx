import React from 'react';
/* import { NavSegmentLeaf } from '../../context'; */
export type NavElementProps = {
    /*    navSegmentLeaf: NavSegmentLeaf; */
};

const NavElement: React.FC<NavElementProps> = (props, key) => {
    /*     const { navSegmentLeaf: elementData } = props; */

    return (
        <div className="btn">
            <li key={key}>
                {/*                {elementData.iconUrl ? (
                    elementData.iconUrl
                ) : (
                    <img className="w-4 h-4" src={elementData.iconUrl ?? ''} />
                )}
                <a href={elementData.path ?? ''}>{elementData.label}</a> */}
            </li>
        </div>
    );
};

export default NavElement;
