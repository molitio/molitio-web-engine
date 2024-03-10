import React from 'react';

type PageTagProps = {
    tag: string;
};

const PageTag: React.FC<PageTagProps> = (props: PageTagProps) => {
    const { tag } = props;

    return <span>{`tag: ${tag}`}</span>;
};

export default PageTag;
