import React from 'react';
import { Center } from '../styles';

const CenterDisplay: React.FC<React.PropsWithChildren> = (props) => {
    const { children } = props;

    return <Center>{children}</Center>;
};

export default CenterDisplay;
