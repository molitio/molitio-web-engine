import React from 'react';
import { InfoPanelData } from '../types';
import '../style/style.css';

const InfoPanel: React.FC<InfoPanelData> = (props) => {
    const { title, description } = props;
    return (
        <div className="relative lg:w-1/2 p-4 flex center bg-white px-4 ">
            <div className="text-2xl lg:w-1/2 font-bold">
                <h2 className="text-2xl font-bold mb-4 text-color underline">{title}</h2>
            </div>
            <div className="md:w-3/4 w-full md:pl-4">
                <p>{description}</p>
            </div>
        </div>
    );
};

export default InfoPanel;
