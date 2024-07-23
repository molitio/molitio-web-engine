import React from 'react';
import { InfoPanelData } from '../types';
import '../style/style.css';

const InfoPanel: React.FC<InfoPanelData> = (props) => {
    const { title, description } = props;
    return (
        <div className="row-gap-8 grid grid-cols-2 md:grid-cols-4 my-8 border-spacing-2">
            <div className="text-2xl lg:w-1/2 font-bold">
                <h2 className="font-heading text-[2.6rem] font-bold dark:text-white lg:text-2xl xl:text-2xl">
                    {title}
                </h2>
            </div>
            <div className="text-sm font-medium uppercase tracking-widest text-gray-800 dark:text-slate-400 lg:text-base">
                <p>{description}</p>
            </div>
        </div>
    );
};

export default InfoPanel;
