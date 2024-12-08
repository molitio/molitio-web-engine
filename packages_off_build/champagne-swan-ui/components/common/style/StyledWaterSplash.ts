import styled from 'styled-components';
import { resolveThemeBreakPointValues } from '../../utils';

export const StyledWaterSplash = styled.img`
    position: absolute;
    right: 0;
    bottom: 0;
`;

export const StyledButtonWaterSplashContainer = styled.div`
    position: absolute;
    width: 160px;
    height: 160px;
    right: -60px;
    bottom: -80px;
    transform: rotate(-15deg);
`;

export const StyledBrandMessageInfoWaterSplash = styled(StyledWaterSplash)`
    right: -50px;
    bottom: -80px;
    transform: rotate(-15deg);
    overflow: hidden;
`;

export const StyledServicesLandingPanelImageWaterSplash = styled(StyledWaterSplash)`
    right: -80px;
    bottom: -110px;
    transform: rotate(-15deg);

    @media (max-width: ${(props) => resolveThemeBreakPointValues(props?.theme, 'sm')}) {
        width: 180px;
        height: 180px;
    }
`;

export const StyledContactContentPanelWaterSplash = styled(StyledWaterSplash)`
    right: -50px;
    bottom: -80px;
    transform: rotate(-15deg);
    /*   @media (max-width: ${(props) => resolveThemeBreakPointValues(props?.theme, 'xl')}) {
    right: -60px;
    bottom: -100px;
  } */
`;
