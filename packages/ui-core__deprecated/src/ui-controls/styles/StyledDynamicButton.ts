import styled from 'styled-components';

export const Button = styled.button`
    color: purple;
    &:hover {
        color: red;
    }
`;

export const ButtonRectangle = styled.button`
    border: 3px solid purple;
`;

export const ButtonRouded = styled.button`
    border: 3px solid blue;
    border-radius: 2em;
    &:hover {
        color: blue;
    }
`;
