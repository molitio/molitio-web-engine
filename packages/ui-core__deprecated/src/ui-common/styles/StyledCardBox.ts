import styled from 'styled-components';

export const StyledCardBoxContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-content: center;
    height: 100%;
`;

export const StyledCardBoxTitle = styled.h1`
    color: ${(props) => props.theme?.palette?.text?.secondary ?? 'black'};
    padding: 3.5em 0em 3.5em 0em;
    font-size: 3.5rem;
    margin: 0;

    @media (max-width: 450px) {
        font-size: 2.4rem;
    }
`;
