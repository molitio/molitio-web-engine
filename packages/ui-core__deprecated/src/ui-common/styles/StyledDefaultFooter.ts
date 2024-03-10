import styled from 'styled-components';

export const Content = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 0.5em;
    background-color: ${(props) => props.theme?.palette?.background?.default};
`;

export const LeftColumnElements = styled.div`
    display: flex;
    gap: 1em;
    justify-content: flex-end;
    align-items: center;
    margin-right: 3em;
`;

export const CenterColumnElements = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    & > * {
        text-align: center;
    }
`;

export const RightColumnElements = styled.div`
    margin-left: 3em;
    gap: 0.5em;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;
