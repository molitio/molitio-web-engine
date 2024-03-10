import { Dimensions } from '../../ui-common';
import { DeviceTypes } from '../../ui-platform';
import { PaletteColor } from './PaletteColor';
import { SystemBackground } from './SystemBackground';
import { SystemText } from './SystemText';

export type SystemTheme = {
    themeName?: string;
    deviceType?: DeviceTypes;
    palette?: {
        primary?: PaletteColor;
        secondary?: PaletteColor;
        tertiary?: PaletteColor;
        quaternary?: PaletteColor;
        text?: SystemText;
        background?: SystemBackground;
        adornmentColorCollection?: Record<string, PaletteColor>;
    };
    dimensions?: {
        page?: Dimensions;
        header?: Dimensions;
        footer?: Dimensions;
    };
};
