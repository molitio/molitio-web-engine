import React from 'react';
import { ErrorMessage, Field, FormikErrors } from 'formik';
import { FormField } from '../types';

const QuoteRequestFromField: React.FC<React.PropsWithChildren> = (props) => {
    const { children } = props;

    return <div className="flex flex-col min-w-[24rem]">{children}</div>;
};

export default QuoteRequestFromField;
