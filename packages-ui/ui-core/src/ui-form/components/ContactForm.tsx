import React from 'react';
import { ContactFormData } from '../types';

const ContactForm: React.FC<ContactFormData> = (props) => {
    const { email, userName, secret } = props;

    return <div>Form</div>;
};

export default ContactForm;
