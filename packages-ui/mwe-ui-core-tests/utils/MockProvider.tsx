import React from 'react';

const MockProvider: React.FC<React.PropsWithChildren<{}>> = (props) => {
    return <>{props.children}</>;
};

export default MockProvider;
