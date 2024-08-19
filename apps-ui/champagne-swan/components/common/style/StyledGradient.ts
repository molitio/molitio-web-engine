import { Dimensions } from "@molitio/ui-core";
import styled, { css } from "styled-components";
import { resolveThemeBreakPointValues } from "../../utils";
import { Visual, Positioning } from "../types";

type StyledLinearGradientProps = {
  direction: "top" | "bottom" | "left" | "right";
  variation?: string;
  visual?: Visual;
  positioning?: Positioning;
  dimensions?: Dimensions;
};

export const StyledLinearGradient = styled.div<StyledLinearGradientProps>`
  box-shadow: ${(props) => props?.visual?.boxShadow ?? ""};
  border-radius: ${(props) => props?.visual?.borderRadius ?? ""};
  position: ${(props) => props?.positioning?.position ?? ""};
  transform: ${(props) => props?.positioning?.transform ?? ""};
  top: ${(props) => props?.positioning?.top ?? ""};
  right: ${(props) => props?.positioning?.right ?? ""};
  bottom: ${(props) => props?.positioning?.bottom ?? ""};
  left: ${(props) => props?.positioning?.left ?? ""};
  padding: ${(props) => props?.positioning?.padding ?? ""};
  margin: ${(props) => props?.positioning?.margin ?? ""};
  ${(props) =>
    props?.dimensions
      ? css`
          height: ${props?.dimensions?.height ?? "100%"};
          width: ${props?.dimensions?.width ?? "100%"};
          min-height: ${props?.dimensions?.minHeight ?? ""};
          min-height: ${props?.dimensions?.minHeight ?? ""};
          max-height: ${props?.dimensions?.maxHeight ?? ""};
          max-width: ${props?.dimensions?.maxWidth ?? ""};
        `
      : css`
          height: 100%;
          width: 100%;
        `}
  opacity: ${(props) => props?.visual?.opacity};
  background: ${(props) => css`
    linear-gradient(to ${props?.direction ?? "top"}, ${
    props?.theme?.palette?.gradient?.[props?.variation ?? ""]
  })
  `};

  @media (max-width: ${(props) =>
      resolveThemeBreakPointValues(props?.theme, "sm")}) {
    /*     min-height: 910px; */
  }
`;
