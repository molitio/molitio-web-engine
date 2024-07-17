import React from 'react';
import { ShowcaseData } from '../types';


const ShowcaseItem: React.FC<ShowcaseData> = (props) => {
    const { title, subTitle } = props;
    return (
        <div>
            {title}
            {subTitle}
        </div>

    );
};

export default ShowcaseItem;

