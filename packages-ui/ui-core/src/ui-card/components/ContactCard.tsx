import React from 'react';
import { ContactCardData } from '../types';


const ContactCard: React.FC<ContactCardData> = (props) => {
    const { companyName, managingDirector, phoneNumber, email, transportationManager, tmEmail, tmPhoneNumber ,freightForwarder, ffEmail, ffPhoneNumber, invoicing } = props;
    return (
        <div className="stat text-center py-3">
            <div className="stat-figure text-secondary">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-8 w-8 stroke-current">
                    <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
            </div>
            <div className="text-4xl stat-title py-4">{companyName}</div>
            <div className="stat-value py-3">Ügyvezető: {managingDirector}</div>
            <div className="stat-desc">{phoneNumber}</div>
            <div className="stat-desc py-4">{email}</div>
            <div className="stat-value py-3">{transportationManager}</div>
            <div className="stat-desc">{tmPhoneNumber}</div>
            <div className="stat-desc py-4">{tmEmail}</div>
            <div className="stat-value py-3">{freightForwarder}</div>
            <div className="stat-desc">{ffPhoneNumber}</div>
            <div className="stat-desc py-4">{ffEmail}</div>
            <div className="stat-desc py-2">Számlázás: {invoicing}</div>
        </div>
    );
};

export default ContactCard;
