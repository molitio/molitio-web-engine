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
                    d="M575.4,540L908,207.3c9.8-9.8,9.8-25.6,0-35.4h0c-9.8-9.8-25.6-9.8-35.4,0L540,504.6L207.3,172c-9.8-9.8-25.6-9.8-35.4,0h0
                c-9.8,9.8-9.8,25.6,0,35.4L504.6,540L172,872.7c-9.8,9.8-9.8,25.6,0,35.4l0,0c9.8,9.8,25.6,9.8,35.4,0L540,575.4L872.7,908
                c9.8,9.8,25.6,9.8,35.4,0h0c9.8-9.8,9.8-25.6,0-35.4L575.4,540z"
                />
            </g>
        </StyledCloseIconSVG>
    );
};

export default CloseIcon;
