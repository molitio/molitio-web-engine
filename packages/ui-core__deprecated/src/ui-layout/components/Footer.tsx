import React from 'react';
import { SystemContext } from '../../ui-common';
import { StyledFooter, StyledFooterText } from '../styles';

type FooterProps = {
    fixed?: boolean;
    externalMaintainer?: string;
};

const Footer: React.FC<FooterProps> = (props) => {
    const { externalMaintainer, fixed } = props;
    const systemContext = React.useContext(SystemContext);

    const footerLeaf = systemContext?.contentRoot?.footer?.leafs;

    const maintainer = externalMaintainer ? externalMaintainer : footerLeaf?.maintainer?.textContent?.maintainer;

    return (
        <StyledFooter fixed={fixed}>
            <StyledFooterText>{maintainer}</StyledFooterText>
        </StyledFooter>
    );
};

export default Footer;
