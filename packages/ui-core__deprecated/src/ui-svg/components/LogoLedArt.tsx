import React from 'react';
import { LogoSVG } from '../styles';
import { SvgCommonProps } from '../types';

const LogoLedArt: React.FC<SvgCommonProps> = (props) => {
    const { linkUrl } = props;

    return (
        <LogoSVG
            {...props}
            id="logo-ledart"
            clipRule="evenodd"
            fillRule="evenodd"
            imageRendering="optimizeQuality"
            shapeRendering="geometricPrecision"
            textRendering="geometricPrecision"
            version="1.1"
            viewBox="0 0 200 100"
            xmlns="http://www.w3.org/2000/svg"
        >
            <defs id="playb"></defs>
            <a href={linkUrl} target="_blank" rel="noreferrer">
                <g id="playd">
                    <path
                        id="playe"
                        fill="#6D6E72"
                        d="m3.8188 12.576h10.535v65.555h10.536v10.926h-21.071zm115.16-0.39015h-8.9325l-16.868 76.48h10.536l10.799-54.482 10.798 54.482h10.536zm77.409 0.39015v9.9503h-12.877v66.53h-10.535v-66.53h-4.1947c-1.2573-3.4226-3.1415-6.7882-7.2641-9.9503h34.871zm-56.585 44.461v28.714l-10.536-46.12v-27.055h0.62312 19.31c3.049 0 8.7741 1.5697 12.393 5.219 2.5142 2.5352 3.8185 6.227 4.213 9.7497 0.53209 4.7524 0.53209 9.7715 0 14.524-0.39456 3.5227-1.6988 7.2145-4.213 9.7497-1.1845 1.1944-2.5944 2.1658-4.0624 2.9325l11.348 34.306h-11.712l-10.592-32.019zm15.781-25.466c0-3.7982-1.6906-7.2637-5.5336-8.612h-9.7044v23.695h9.7044c3.8429-1.3485 5.5336-4.8138 5.5336-8.612v-6.4709zm-89.999 47.316h7.0199c2.5955 0.27547 6.3024-2.7556 6.7226-7.1947v-39.896c0-3.8907-1.5554-7.4416-5.5337-8.8375h-8.2088v55.928zm24.278-46.079v25.364c-1.999 8.9956-3.9981 17.991-5.9971 26.987-6.7663 4.4881-9.1912 3.8984-18.824 3.8984h-10.536v-10.926-65.555h18.437c3.049 0 8.774 1.5696 12.393 5.219 3.8838 3.9163 4.5259 9.7809 4.5259 15.013zm-47.995 12.546h8.5845v10.048h-8.5845zm8.5845-32.777v9.9503h-10.535v55.604h10.535v10.926h-21.071v-76.48z"
                        strokeWidth="1.3366"
                    />
                </g>
            </a>
        </LogoSVG>
    );
};

export default LogoLedArt;
