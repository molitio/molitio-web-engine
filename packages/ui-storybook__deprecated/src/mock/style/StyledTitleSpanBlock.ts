import { SpanBlock, ThemeColor } from '@molitio/ui-core__deprecated';
import styled from 'styled-components';
type TypographyProps = {
    textContent?: string;
    rem: number;
    themeColor?: ThemeColor;
    marginTop?: string;
    maxContent?: boolean;
    center?: boolean;
};
export const StyledTitleSpanBlock = styled(SpanBlock)<TypographyProps>`
    text-shadow: 0.6px 0.6px 0
        ${(props) => {
            switch (props?.themeColor) {
                case 'primary':
                    return props.theme?.palette?.text?.secondary;
                case 'secondary':
                    return props?.theme?.palette?.text?.primary;
                default:
                    return '#000';
            }
        }};
`;
