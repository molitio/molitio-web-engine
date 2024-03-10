import styled, { css, keyframes } from 'styled-components';
import { Dimensions, HeroIconColors, HeroIconType } from '../types';

const glowing = keyframes`
    0% {
        background-position: 0 0;
    }
    50% {
        background-position: 400% 0;
    }
    100% {
        background-position: 0 0;
    }
`;

type IconsContainerProps = {
    itemCount?: number;
    innerPaddingTop?: string;
};
export const IconsContainer = styled.div<IconsContainerProps>`
    padding-top: ${(props) => props?.innerPaddingTop ?? '6em'};
    padding-bottom: 2em;
    width: calc(${(props) => props?.itemCount ?? 1} * 6em);
    justify-content: space-between;
    align-items: center;
    display: flex;
    flex-direction: row;
    @media (max-width: 850px) {
        width: calc(${(props) => props?.itemCount ?? 1} * 5em);
    }
    @media (max-width: 530px) {
        width: calc(${(props) => props?.itemCount ?? 1} * 4em);
    }
`;

// TODO: fix icons to accept logic based on usage type
// sleeping dragon and champagne swan
type StyledIconGroupImageProps = {
    iconBorderRadius?: string;
    heroIconType?: HeroIconType;
    heroIconColors?: HeroIconColors;
    isActive?: boolean;
};
export const StyledIconImage = styled.img<StyledIconGroupImageProps>((props) => {
    if (props?.isActive) {
        switch (props?.heroIconType) {
            case 'glowing':
                return css`
                    cursor: pointer;
                    justify-items: center;
                    height: 3.8em;
                    width: 3.8em;
                    padding: 0.3em;
                    align-self: stretch;
                    align-self: center;
                    background-color: #5d5d5d;
                    border: 1px solid #5d5d5d;
                    border-top: none;
                    border-bottom: none;
                    border-image-slice: 2;
                    box-shadow:
                        0px 3px 2px #2d2d2d,
                        0px -1px 2px white;
                    border-radius: ${props?.iconBorderRadius ?? '0'};
                `;

            case 'drop-shadow':
                return css`
                    cursor: pointer;
                    height: 100%;
                    width: 100%;
                    border: 0 solid transparent;
                    background-color: ${props?.theme?.palette?.primary?.main};
                    border-radius: ${props?.iconBorderRadius ?? '0'};
                `;
            default:
                return css``;
        }
    } else {
        switch (props?.heroIconType) {
            case 'glowing':
                return css`
                    cursor: pointer;
                    height: 3.8em;
                    width: 3.8em;
                    border-radius: ${props?.iconBorderRadius ?? '0'};
                    background-color: #5d5d5d;
                    padding: 0.3em;
                    align-self: stretch;
                    align-self: center;
                    justify-items: center;
                    border: 1px solid #5d5d5d;
                    border-top: none;
                    border-bottom: none;
                    border-image-slice: 1;
                    box-shadow:
                        0px 3px 2px #2d2d2d,
                        0px -1px 2px white;
                `;

            case 'drop-shadow':
                return css`
                    cursor: pointer;
                    height: 100%;
                    width: 100%;
                    border: 0 solid transparent;
                    background-color: ${props?.theme?.palette?.secondary?.main};
                    border-radius: ${props?.iconBorderRadius ?? '0'};
                `;
            default:
                return css``;
        }
    }
});

type StyledButtonContainerProps = {
    dimensions?: Dimensions;
    iconBorderRadius?: string;
    heroIconType?: HeroIconType;
    isActive?: boolean;
};
export const StyledButtonContainer = styled.div<StyledButtonContainerProps>((props) => {
    if (props?.isActive) {
        switch (props?.heroIconType) {
            case 'glowing':
                return css`
                    position: relative;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    width: ${props?.dimensions?.width ?? '100%'};
                    height: ${props?.dimensions?.height ?? '100%'};
                    ::after {
                        content: '';
                        position: absolute;
                        width: ${props?.dimensions?.width ?? '100%'};
                        height: ${props?.dimensions?.height ?? '100%'};
                        animation: ${glowing} 20s linear infinite;
                        opacity: 1;
                        z-index: -1;
                        filter: blur(4px);
                        transition: opacity 0.3s ease-in-out;
                        border-radius: ${props?.iconBorderRadius ?? '0'};

                        :active::after {
                            background: transparent;
                        }

                        ::after {
                            z-index: -1;
                            content: '';
                            position: absolute;
                            width: 100%;
                            height: 100%;
                            left: 0;
                            top: 0;
                            border-radius: ${props?.iconBorderRadius ?? '0'};
                        }
                    }
                `;

            case 'drop-shadow':
                return css`
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    position: relative;
                    box-shadow: 3px 3px 3px #c0a87ccc;
                    border-radius: ${props?.iconBorderRadius ?? '0'};
                    width: ${props?.dimensions?.width ?? '100%'};
                    height: ${props?.dimensions?.height ?? '100%'};
                `;
            default:
                return css``;
        }
    } else {
        switch (props?.heroIconType) {
            case 'glowing':
                return css``;

            case 'drop-shadow':
                return css`
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    position: relative;
                    box-shadow: 3px 3px 3px #c0a87cff;
                    border-radius: ${props?.iconBorderRadius ?? '0'};
                    width: ${props?.dimensions?.width ?? '100%'};
                    height: ${props?.dimensions?.height ?? '100%'};
                `;
            default:
                return css``;
        }
    }
});

type StyledButtonProps = {
    isActive?: boolean;
    heroIconType?: HeroIconType;
    heroIconColors?: HeroIconColors;
    iconBorderRadius?: string;
};
export const StyledButton = styled.button<StyledButtonProps>((props) => {
    if (props?.isActive) {
        switch (props?.heroIconType) {
            case 'glowing': {
                return css`
                    width: 3.8em;
                    height: 3.8em;
                    border: none;
                    outline: none;
                    color: #fff;
                    background: rgba(71, 69, 69, 0.001);
                    cursor: pointer;
                    position: relative;
                    z-index: 0;
                    border-radius: ${props?.iconBorderRadius ?? '0'};
                    :before {
                        content: '';
                        background: linear-gradient(
                            45deg,
                            #51ff00,
                            #00ff73,
                            #00ffcc,
                            #00aaff,
                            #0059ff,
                            #002fff,
                            #2f00ff,
                            #5500ff
                        );

                        position: absolute;
                        background-size: 400%;
                        filter: blur(4px);
                        z-index: -1;
                        width: calc(100% + 2px);
                        height: calc(100% + 2px);
                        top: -2px;
                        left: -2px;
                        right: -2px;
                        bottom: -2px;
                        animation: ${glowing} 20s linear infinite;
                        opacity: 1;
                        transition: opacity 0.3s ease-in-out;
                        border-radius: ${props?.iconBorderRadius ?? '0'};

                        :active:after {
                            background: transparent;
                        }

                        ::after {
                            z-index: -1;
                            content: '';
                            position: absolute;
                            width: 100%;
                            height: 100%;
                            left: 0;
                            top: 0;
                            border-radius: ${props?.iconBorderRadius ?? '0'};
                        }
                    }
                `;
            }
            case 'drop-shadow': {
                return css`
                    width: 100%;
                    height: 100%;
                    position: relative;
                    border: 0 solid transparent;
                    border-radius: ${props?.iconBorderRadius ?? '0'};
                    top: 0;
                    right: 0;
                    bottom: 0;
                    left: 0;
                    padding: 0;
                `;
            }

            default: {
                return css``;
            }
        }
    } else {
        switch (props?.heroIconType) {
            case 'glowing': {
                return css`
                    width: 3.8em;
                    height: 3.8em;
                    background-color: rgba(255, 255, 255, 0);
                    border: none;
                `;
            }
            case 'drop-shadow': {
                return css`
                    width: 100%;
                    height: 100%;
                    position: relative;
                    border: 0 solid transparent;
                    border-radius: ${props?.iconBorderRadius ?? '0'};
                    top: 0;
                    right: 0;
                    bottom: 0;
                    left: 0;
                    padding: 0;
                `;
            }
            default: {
                return css``;
            }
        }
    }
});
