import React from 'react';

type ControlLinkProps = {
    text?: string;
    href?: string;
};

const ControlLink: React.FC<ControlLinkProps> = (props) => {
    const { text, href } = props;
    return <a href={href}>{`${text}`}</a>;
};

export default ControlLink;
