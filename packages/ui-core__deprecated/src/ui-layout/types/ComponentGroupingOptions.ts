import { Breakpoints } from '../../ui-style-service';
import { ShapeDimensions } from '../../ui-svg';

export type ComponentGroupingOptions = {
    dimensions?: ShapeDimensions;
    itemGap?: string;
    itemPadding?: string;
    fontColor?: string;
    fontSize?: string;
    switchDirectionOn?: [Breakpoints];
    margin?: string;
    marginTop?: string;
    marginRight?: string;
    marginBottom?: string;
    marginLeft?: string;
    justifyContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
};
