import { TextAlignTypes } from '../../ui-layout';
import { BackgroundTypes } from './BackgroundTypes';
import { Dimensions } from './Dimensions';
import { HeroIconType, HeroIconColors } from './HeroIconType';

/**
 * @type SegmantParams - is a collection of parameters that define a page segment.
 */
export type SegmentParams = {
    pageName: string;
    title?: string;
    titleFontSize?: string;
    titleTextShadow?: string;
    titleFontWeight?: string;
    description?: string;
    descriptionTextAlign?: TextAlignTypes;
    descriptionTextShadow?: string;
    descriptionTextFontWeight?: string;
    descriptionTextDimensions?: Dimensions;
    desciptionSubText?: string;
    descriptionSubTextAlign?: TextAlignTypes;
    descriptionSubTextDimensions?: Dimensions;
    backgroundType?: BackgroundTypes;
    backgroundUrl?: string;
    iconBorderRadius?: string;
    heroIconType?: HeroIconType;
    heroIconColors?: HeroIconColors;
    disableLineDecorator?: boolean;
    innerPaddingTop?: string;
    effectLayerUrl?: string;
};
