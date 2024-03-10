import styled from 'styled-components';

type StyledComponentPaddingProps = {
    backgroundColor?: string;
};
export const StyledComponentPadding = styled.div<StyledComponentPaddingProps>`
    height: 100vh;
    background-color: ${(props) => props?.backgroundColor ?? '#1e1e1eef'};
    padding: 1.2em;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.6em;
`;
