import { Dimensions, Spacing } from '../../ui-common';
import { Typeography } from '../../ui-common/types/Typeography';

export type NavSegmentParams = React.LiHTMLAttributes<HTMLLIElement> &
    Dimensions &
    Spacing &
    Typeography & {
        flex?: number;
        color?: string;
        visible?: boolean;
        centered?: boolean;
        backgroundColor?: string;
    };
