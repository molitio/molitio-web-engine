import React from 'react';
import { ShowcaseData } from '../types';

const ShowcaseItem: React.FC<ShowcaseData> = (props) => {
    const { title, subTitle } = props;
    return (
        <div
            onClick={() => {
                console.log(`${title} clicked`);
            }}
        >
            {title} <br />
            {subTitle}
        </div>
    );
};

export default ShowcaseItem;
