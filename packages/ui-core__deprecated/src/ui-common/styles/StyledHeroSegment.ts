import styled from 'styled-components';

export const StyledGreenBrickHeroSegment = styled.div`
    position: relative;
`;

export const StyledBox = styled.div`
    background-color: ${(props) => props.theme?.palette?.background?.default};
    min-height: ${(props) => props.theme?.dimensions?.page?.height};
`;

export const StyledGreenBrickButton = styled.button`
    background-color: ${(props) => props.theme?.palette?.primary?.main};
    color: ${(props) => props.theme?.palette?.text?.primary};
    font-family: Helvetica, Arial, sans-serif;
    padding: 0.93em 0.62em 0.93em 0.62em;
    border: 1px solid white;
    box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.673);
    cursor: pointer;
    @media (max-width: 834px) {
        padding: 0.68em 0.43em 0.68em 0.43em;
    }
`;

type StyledGreenBrickImgProps = {
    imageUrl: string;
};

export const StyledGreenBrickImg = styled.div<StyledGreenBrickImgProps>`
    object-fit: fill;
    background: url(${(props) => props?.imageUrl});
    min-height: ${(props) => props.theme?.dimensions?.page?.height};
    background-size: cover;
    background-position: center;
    width: 100%;

    @media (max-width: 834px) {
    }
`;

export const GreenBricHeroSegmentContainer = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    top: 12em;
    justify-content: flex-end;
`;
