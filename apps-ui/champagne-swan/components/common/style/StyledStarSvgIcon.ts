import styled from "styled-components";

type StyledStarSvgIcon = {
  fill: string;
  dx?: string;
  dy?: string;
  stdDeviation?: string;
  floodOpacity?: string;
};

export const StyledStarSvgIcon = styled.svg<StyledStarSvgIcon>`
  height: 27px;
  width: 27px;
  fill: ${(props) => props.fill};
  padding: 3px;

  path {
    filter: url(#drop-shadow);
  }
`;
