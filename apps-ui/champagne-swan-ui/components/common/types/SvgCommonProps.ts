import { ShapeDimensions } from './ShapeDimensions';

export type SvgCommonProps = {
    dimensions?: ShapeDimensions | 'FULLSCREEN';
    opacity?: number;
    linkUrl?: string;
    embededImageSrc?: string;
};
