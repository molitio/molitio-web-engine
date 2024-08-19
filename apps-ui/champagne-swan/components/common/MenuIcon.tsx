import { SystemContext } from "@molitio/ui-core";
import React from "react";
import { StyledSvgIconContainer } from "./style";

const MenuIcon: React.FC = () => {
  const systemContext = React.useContext(SystemContext);
  const theme = systemContext?.theme;

  return (
    <StyledSvgIconContainer
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 1080 1080"
      xmlSpace="preserve"
    >
      <g fill={theme?.palette?.primary?.main ?? ""}>
        <path
          d="M1035.5,327.5h-991c-13.8,0-25,11.2-25,25v0c0,13.8,11.2,25,25,25h991c13.8,0,25-11.2,25-25v0
		C1060.5,338.7,1049.3,327.5,1035.5,327.5z"
        />
        <path
          d="M1035.5,515h-991c-13.8,0-25,11.2-25,25v0c0,13.8,11.2,25,25,25h991c13.8,0,25-11.2,25-25v0
		C1060.5,526.2,1049.3,515,1035.5,515z"
        />
        <path
          d="M1035.5,702.5h-991c-13.8,0-25,11.2-25,25v0c0,13.8,11.2,25,25,25h991c13.8,0,25-11.2,25-25v0
		C1060.5,713.7,1049.3,702.5,1035.5,702.5z"
        />
      </g>
    </StyledSvgIconContainer>
  );
};

export default MenuIcon;
