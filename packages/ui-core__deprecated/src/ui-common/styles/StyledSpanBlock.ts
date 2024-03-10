import styled, { css } from 'styled-components';
import { ThemeColor } from '../../ui-style-service';

type ParagraphBlockProps = {
    themeColor?: ThemeColor;
    marginTop?: string;
    maxContent?: boolean;
    center?: boolean;
    rem: number;
};
export const ParagraphBlock = styled.p<ParagraphBlockProps>`
    ${(props) => {
        switch (props?.themeColor) {
            case 'primary':
                return css`
                    font-size: ${props?.rem ? `${props.rem}rem` : `1rem`};
                    color: ${props?.theme?.palette?.text?.primary};
                `;

            case 'secondary':
                return css`
                    font-size: ${props?.rem ? `${props.rem}rem` : `1rem`};
                    color: ${props?.theme?.palette?.text?.secondary};
                `;

            default:
                return css``;
        }
    }}
    font-size: ${(props) => props?.rem ?? '1rem'};
    margin-top: ${(props) => props?.marginTop ?? 0};

    ${(props) => (props.maxContent ? `width: 'max-content', height: 'max-content' ` : ``)}
`;
