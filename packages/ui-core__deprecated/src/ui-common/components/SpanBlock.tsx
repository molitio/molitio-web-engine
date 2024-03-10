import React from 'react';
import { ThemeColor } from '../../ui-style-service';
import { ParagraphBlock } from '../styles';

type TypographyProps = {
    textContent?: string;
    rem: number;
    themeColor?: ThemeColor;
    marginTop?: string;
    maxContent?: boolean;
    center?: boolean;
};

const SpanBlock: React.FC<TypographyProps & React.PropsWithChildren> = (props) => {
    const { children, textContent } = props;
    return <ParagraphBlock {...props}>{children ? children : textContent ?? ''}</ParagraphBlock>;
};

export default SpanBlock;
