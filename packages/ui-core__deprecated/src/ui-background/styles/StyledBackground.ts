import styled from 'styled-components';

export const BackgroundContainer = styled.div`
    position: relative;
    top: env(safe-area-inset-top, 0px);
    left: env(safe-area-inset-left, 0px);
    width: calc(env(safe-area-inset-left, 0px) + 100% + env(safe-area-inset-right, 0px));
    height: calc(env(safe-area-inset-top, 0px) + 100% + env(safe-area-inset-bottom, 0px));
    z-index: -100;
    pointer-events: none;
`;

type ImageBackgroundProps = {
    imageUrl: string;
};
export const ImageBackground = styled.div<ImageBackgroundProps>`
    position: absolute;
    background: url(${(props) => props?.imageUrl});
    min-height: 100vh;
    background-size: cover;
    background-position: center;
    width: 100%;
`;
