import React from 'react';
import { StyledLogoImage } from '../styles';

type LogoProps = {
    url: string;
    opacity?: number;
};

export const Logo: React.FC<LogoProps> = (props) => {
    const { url, opacity } = props;

    return <StyledLogoImage opacity={opacity} src={url} />;
};
