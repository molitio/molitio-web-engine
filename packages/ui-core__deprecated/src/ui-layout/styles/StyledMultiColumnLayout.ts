import styled from 'styled-components';

export const PageColumnContainer = styled.ul`
    min-height: calc(100vh - 10px);
    display: grid;
    grid-template-columns: repeat(auto-fit, minMax(10vw, 1fr));
`;
