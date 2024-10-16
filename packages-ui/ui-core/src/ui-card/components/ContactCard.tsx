import React from 'react';
import { ContactCardData } from '../types';

export type ContactCardProps = { data: ContactCardData };

const ContactCard: React.FC<ContactCardProps> = (props) => {
    //get key value pairs, not named props
    const { data } = props;
    return (
        <div className="stat text-center py-3">
            <div className="stat-figure text-secondary">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="inline-block h-8 w-8 stroke-current"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                </svg>
            </div>
            <div className="text-4xl stat-title py-4">{data.companyName}</div>
            <div className="stat-value py-3">Ügyvezető: {data.managingDirector}</div>
            <div className="stat-desc">{data.phoneNumber}</div>
            <div className="stat-desc py-4">{data.email}</div>
            <div className="stat-value py-3">{data.transportationManager}</div>
            <div className="stat-desc">{data.tmPhoneNumber}</div>
            <div className="stat-desc py-4">{data.tmEmail}</div>
            <div className="stat-value py-3">{data.freightForwarder}</div>
            <div className="stat-desc">{data.ffPhoneNumber}</div>
            <div className="stat-desc py-4">{data.ffEmail}</div>
            <div className="stat-desc py-2">Számlázás: {data.invoicing}</div>
        </div>
    );
};

export default ContactCard;
