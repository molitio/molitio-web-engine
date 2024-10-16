import React from 'react';
import { ContactCardData } from '../types';


const ContactCard: React.FC<ContactCardData> = (props) => {
    const { companyName, managingDirector, phoneNumber, email, transportationManager, tmEmail, tmPhoneNumber ,freightForwarder, ffEmail, ffPhoneNumber, invoicing } = props;
    return (
        <div className="carousel rounded-box">
            
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
