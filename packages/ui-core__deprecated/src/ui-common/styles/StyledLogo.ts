import styled from 'styled-components';

type StyledLogoImageProps = {
    opacity?: string | number;
};

export const StyledLogoImage = styled.img<StyledLogoImageProps>`
    width: 300px;
    height: 300px;
    justify-content: center;
    align-items: center;
    text-align: center;
    z-index: '90';
    opacity: ${(props) => props.opacity ?? '0.9'};
`;
