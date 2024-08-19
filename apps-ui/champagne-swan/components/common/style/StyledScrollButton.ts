import styled from "styled-components";

interface HiddenProps {
  visible: boolean;
}

export const Button = styled.button<HiddenProps>`
  display: ${(props) => (props?.visible ? "inline" : "none")};
  border: ${(props) => `1px solid ${props?.theme?.palette?.primary?.main}`};
  position: fixed;
  right: 4vw;
  bottom: 12vh;
  padding: 4px;
  font-size: 1rem;
  z-index: 1;
  cursor: pointer;
  color: #0c7a939a;
  background: #c1dadf;
  font-weight: 600;
  box-shadow: 0px 1px 1px 1px #0c7a939a;
  border-radius: 5px;
`;
