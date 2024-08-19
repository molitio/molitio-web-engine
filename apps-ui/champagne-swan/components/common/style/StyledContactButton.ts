import styled from "styled-components";

export const ContactButton = styled.button`
  padding: 0.5em 1em;
  margin: auto;
  border: none;
  font-size: 1.5em;
  font-weight: 200;
  text-decoration: none;
  box-shadow: ${(props) =>
    props?.theme?.palette?.visual["buttonDafaultShadow"]?.boxShadow ?? ""};
  color: ${(props) => props?.theme?.palette?.text?.secondary ?? ""};
  background-color: ${(props) => props?.theme?.palette?.tertiary?.main ?? ""};
  cursor: pointer;
  :hover {
    color: ${(props) => props?.theme?.palette?.primary?.main ?? ""};
    background-color: ${(props) =>
      props?.theme?.palette?.text?.secondary ?? ""};
  }
`;
