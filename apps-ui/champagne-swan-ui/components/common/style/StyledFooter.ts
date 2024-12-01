import styled from 'styled-components';

export const StyledFooter = styled.footer`
    background-color: ${(props) => props?.theme?.palette?.background?.default ?? '#000000'};
    padding: 1em;
    font-size: 0.8em;
    text-align: center;
    color: #9d8d7b;
    width: 100%;
    height: 3em;
`;
