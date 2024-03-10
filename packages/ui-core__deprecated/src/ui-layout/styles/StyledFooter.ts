import styled from 'styled-components';

type StyledFooterProps = {
    fixed?: boolean;
};
export const StyledFooter = styled.footer<StyledFooterProps>`
    position: ${(props) => (props?.fixed ? 'fixed' : 'relative')};
    height: max-content;
    opacity: 0.8;
    text-align: center;
    padding: 0.42em;
    right: 0;
    bottom: 0;
    left: 0;
    margin: 0;
    color: ${(props) => props.theme?.palette?.text?.primary};
    background-color: ${(props) => props?.theme?.palette?.background?.secondary};
`;
export const StyledFooterText = styled.p`
    font-family: Helvetica sans-serif;
    text-align: center;
    font-weight: 100;
    font-size: 0.8rem;
    opacity: 0.5;
    margin: 0;
`;
