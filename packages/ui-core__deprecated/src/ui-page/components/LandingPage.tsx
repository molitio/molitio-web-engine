import React from 'react';
import { StyledLandingPage, StyledPageTitle, StyledPageContent } from '../styles';

type LandingPageProps = {
    externalPageTitle: string;
};

const LandingPage: React.FC<LandingPageProps & React.PropsWithChildren> = (props) => {
    const { children, externalPageTitle } = props;

    return (
        <StyledLandingPage>
            <StyledPageTitle>{externalPageTitle}</StyledPageTitle>
            <StyledPageContent>{children}</StyledPageContent>
        </StyledLandingPage>
    );
};

export default LandingPage;
