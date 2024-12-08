import React from 'react';
import { ContactCardData } from '../types';

export type ContactCardProps = { data: ContactCardData };

const ContactCard: React.FC<ContactCardProps> = (props) => {
    const { data } = props;
    const segments = data.segments ?? {};

    return (
        <div className='flex flex-col items-center py-6'>
            <h2 className="text-3xl font-bold">{data.title}</h2>
            <ul className="border-b text-2xl flex flex-col xl:flex-row p-4">
                {Object.keys(segments).map((segment, i) => (
                    <li key={i} className='p-4 flex flex-col'>
                        <span className="text-xl">{segments[segment]?.segmentKey}</span>
                        <span >{segments[segment]?.segmentValue}</span>
                        
                        
                        {segments[segment].dataSegments && (
                            <ul className="mt-2">
                                {Object.entries(segments[segment]?.dataSegments ?? {}).map(([key, value]) => (
                                    <li key={key} className='flex flex-col'>
                                        <span className="text-xl mb-1 py-1">{value?.segmentKey}</span>
                                        <span>{value?.segmentValue}</span>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ContactCard;

