import React from 'react';
import ContactForm from './ContactForm';

export type FormContainerProps = {
    form: React.JSX.Element;
};

const FormContainer: React.FC<FormContainerProps> = (props) => {
    const { form } = props;
    return <div>insert {form} here</div>;
};
