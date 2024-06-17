import React from 'react';
import ContactForm from './ContactForm';

const FormContainer: React.FC<React.PropsWithChildren> = (props) => {
    const { children } = props;

    //TODO: fix styling of the container
    return <div className="contact-form">{children}</div>;
};

export default FormContainer;