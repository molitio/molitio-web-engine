import React from 'react';
import { ArrowDirection } from '../types';

type ControlArrowProps = {
    direction: ArrowDirection;
};

const ControlArrow: React.FC<ControlArrowProps> = (props) => {
    const { direction } = props;
    return <div>{`direction: ${direction}`}</div>;
};

export default ControlArrow;
