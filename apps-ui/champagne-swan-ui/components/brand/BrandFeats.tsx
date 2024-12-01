import React from 'react';
import { SystemContext } from '@molitio/ui-core';
import { StyledBrandFeats, StyledInfoContainer, StyledSkillScore, StyledSkillName } from './style';

const BrandFeats: React.FC = () => {
    const systemContext = React.useContext(SystemContext);

    const opinionsLeafs = systemContext?.contentRoot?.opinions?.leafs;
    const textContent = opinionsLeafs?.opinionCards?.textContent;

    return (
        <StyledBrandFeats>
            <StyledInfoContainer>
                <StyledSkillScore>{textContent?.colleaguesScore ?? ''}</StyledSkillScore>
                <StyledSkillName>{textContent?.colleagues ?? ''}</StyledSkillName>
            </StyledInfoContainer>
            <StyledInfoContainer>
                <StyledSkillScore>{textContent?.clientsScore ?? ''}</StyledSkillScore>
                <StyledSkillName>{textContent?.clients}</StyledSkillName>
            </StyledInfoContainer>
            <StyledInfoContainer>
                <StyledSkillScore>{textContent?.projectsScore ?? ''}</StyledSkillScore>
                <StyledSkillName>{textContent?.projects}</StyledSkillName>
            </StyledInfoContainer>
            <StyledInfoContainer>
                <StyledSkillScore>{textContent?.equipmentScore ?? ''}</StyledSkillScore>
                <StyledSkillName>{textContent?.equipment ?? ''}</StyledSkillName>
            </StyledInfoContainer>
        </StyledBrandFeats>
    );
};

export default BrandFeats;
