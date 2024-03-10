import React from 'react';
import { EmbededImageSVG } from '../styles';
import { SvgCommonProps } from '../types';

const EmbededImage: React.FC<SvgCommonProps> = (props) => {
    const { dimensions, opacity, embededImageSrc } = props;

    const componentHeight = dimensions === 'FULLSCREEN' ? '100%' : dimensions?.height ?? 'auto';
    const componentWidth = dimensions === 'FULLSCREEN' ? '100%' : dimensions?.width ?? 'auto';

    return (
        <EmbededImageSVG
            opacity={opacity}
            width={componentWidth}
            height={componentHeight}
            preserveAspectRatio="xMaxYMax slice"
            xlinkHref={embededImageSrc}
        />
    );
};

export default EmbededImage;
