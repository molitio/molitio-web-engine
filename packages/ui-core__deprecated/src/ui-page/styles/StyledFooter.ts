import styled from 'styled-components';

export const StyledFooter = styled.footer`
    height: max-content;
    border: 1px solid ${(props) => props?.theme?.palette?.background?.default};
    color: ${(props) => props.theme?.palette?.text?.primary};
    text-align: right;
    opacity: 0.9;
    background-color: ${(props) => props?.theme?.palette?.background?.default};
`;
export const StyledFooterText = styled.p`
    font-family: Helvetica, Arial, sans-serif;
    font-size: 1rem;
    opacity: 0.5;
    margin-right: 5em;

    @media (max-width: 400px) {
        font-size: 0.8rem;
    }
`;
