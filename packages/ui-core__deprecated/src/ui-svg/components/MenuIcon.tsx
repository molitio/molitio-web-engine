import React from 'react';
import { SystemContext } from '../../ui-common';
import { ThemeNameTags, useMolitioTheme } from '../../ui-style-service';
import { StyledCloseIconSVG } from '../styles';

const CloseIcon: React.FC = () => {
    const systemContext = React.useContext(SystemContext);

    const theme = systemContext.theme ?? useMolitioTheme({ themeNameTag: ThemeNameTags.DEFAULT }).theme;

    return (
        <StyledCloseIconSVG
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 1080 1080"
            xmlSpace="preserve"
        >
            <g fill={theme?.palette?.text?.primary}>
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
        </StyledCloseIconSVG>
    );
};

export default CloseIcon;
