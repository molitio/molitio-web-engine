import React from 'react';

type SvgEmbeddedHtmlProps = React.PropsWithChildren & {
    x: string;
    y: string;
    height: string;
    width: string;
};

const EmbededHtml: React.FC<SvgEmbeddedHtmlProps> = (props) => {
    const { x, y, width, height, children } = props;

    const xmlProps = {
        xmlns: 'http://www.w3.org/2000/xhtml',
    };
    return (
        <foreignObject x={x} y={y} width={width} height={height}>
            <div {...xmlProps}>{<div>{children}</div>}</div>
        </foreignObject>
    );
};

export default EmbededHtml;
