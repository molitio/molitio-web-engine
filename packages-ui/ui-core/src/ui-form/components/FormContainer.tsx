import React from 'react';

const FormContainer: React.FC<React.PropsWithChildren> = (props) => {
    const { children } = props;

    //TODO: fix styling of the container
    return <div className="contact-form">{children}</div>;
};

export default FormContainer;
