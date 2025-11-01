import React from 'react';
import { PageSection } from '../../ui-page';

const FormContainer: React.FC<React.PropsWithChildren> = (props) => {
    const { children } = props;

    return <PageSection>{children}</PageSection>;
};

export default FormContainer;
