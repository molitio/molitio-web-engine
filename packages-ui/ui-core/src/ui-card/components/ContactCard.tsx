import React from 'react';
import { ContactCardData, ContactSegment, ContactCardSegment } from '../types';

export type ContactCardProps = { data: ContactCardData };

const ContactCard: React.FC<ContactCardProps> = (props) => {
    const { data } = props;
    return (
        <div>
            <h2 className="text-3xl font-bold">{data.title}</h2>
            <ul className="stat text-center py-3">
                {Object.entries(data.segments ?? {}).map(([key, segment]) => (
                    <li key={key} className="stat-value py-3">
                        <span className="stat-title">{segment.segmentKey}: </span>
                        <span className="stat-desc">
                            {segment.segmentValue}
                            {segment.dataSegments && (
                                <ul className="list-disc pl-4">
                                    {Object.entries(segment.dataSegments).map(([key, segment]) => (
                                        <li key={key}>
                                            {segment.segmentKey}: {segment.segmentValue?.title}
                                            {segment.segmentValue?.segments && (
                                                <ul className="list-disc pl-4">
                                                    {Object.entries(segment.segmentValue?.segments ?? {}).map(
                                                        ([key, segment]) => (
                                                            <li key={key}>
                                                                {segment.segmentKey}: {segment.segmentValue}
                                                            </li>
                                                        ),
                                                    )}
                                                </ul>
                                            )}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ContactCard;
