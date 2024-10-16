import React from 'react';
import { ContactCardData, ContactSegment, ContactCardDataSegment } from '../types';

export type ContactCardProps = { data: ContactCardData };

const ContactCard: React.FC<ContactCardProps> = (props) => {
    const { data } = props;
    const segments = data.segments ?? {};

    return (
        <div>
            <h2 className="text-3xl font-bold">{data.title}</h2>
            <ul className="text-center py-3">
                {Object.keys(segments).map((segment, i) => (
                    <li key={i} className=" py-3">
                        <span className="">{segments[segment]?.segmentKey}</span>
                        <span className="">{segments[segment]?.segmentValue}</span>
                        {segments[segment].dataSegments && (
                            <ul className="pl-4">
                                {Object.entries(segments[segment]?.dataSegments ?? {}).map(([key, value]) => (
                                    <li key={key}>
                                        <span>{value?.segmentKey}</span>
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
