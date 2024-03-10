import styled from 'styled-components';

type StyledContactIconProps = {
    margin?: string;
};
export const StyledContactIcon = styled.td<StyledContactIconProps>`
    width: 3em;
    height: 3em;
    & > img {
        margin: ${(props) => props.margin};
    }
`;
