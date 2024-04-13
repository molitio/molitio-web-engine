import React from 'react';
/* import { CoverPageProps } from '../types';
import {
    StyleCoverPageContentCta,
    StyleCoverPageContentText,
    StyledCoverContent,
    StyledCoverPage,
    StyledCoverPageBackground,
    StyledCoverPageTitle,
} from '../styles';
import { Button, ButtonType } from '../../ui-interactive';
import { ThemeColorVariant } from '../../system-theme';
 */
/**
 * CoverPage is a customizable landing page for web applications.
 * @type {React.FC<CoverPageProps>}
 * @param {string} coverContentTitle - The header text of the CoverPage.
 * @param {string} coverContentText - The content text of the CoverPage.
 * @param {React.ReactNode} background - The background of the CoverPage.
 * @returns {React.FC<CoverPageProps>}
 *
 * @example
 *  <CoverPage background={<Image src='example' alt='example alt text'/>}>
 *
 * @example
 * <CoverPage>
 *    <h1>My Cover Page</h1>
 * <ExampleBacgroundImageComponent />
 * </CoverPage>
 */

/* const CoverPage: React.FC<CoverPageProps> = (props) => { */
const CoverPage: React.FC = () => {
    /*     const { coverContentTitle, coverContentText, background } = props;
    const pageBg: ThemeColorVariant = ThemeColorVariant.Default; */
    return (
        <div>
            <h1>My Cover Page</h1>
        </div>
        /*         <StyledCoverPage>
            <StyledCoverPageBackground>{background}</StyledCoverPageBackground>
            <StyledCoverContent>
                <StyledCoverPageTitle $colorvariant={ThemeColorVariant.Main} data-testid={'cover_page_title'}>
                    {coverContentTitle ?? ''}
                </StyledCoverPageTitle>
                <StyleCoverPageContentText $colorvariant={ThemeColorVariant.Main} data-testid={'cover_page_text'}>
                    {coverContentText ?? ''}
                </StyleCoverPageContentText>

                <StyleCoverPageContentCta data-testid={'cover_page_cta'}>
                    <Button data-testid={'cover_page_primary_cta'} type={ButtonType.Primary}>
                        Call
                    </Button>
                    <Button data-testid={'cover_page_secondary_cta'} type={ButtonType.Secondary}>
                        Email
                    </Button>
                </StyleCoverPageContentCta>
            </StyledCoverContent>{' '}
            *
        </StyledCoverPage> */
    );
};

export default CoverPage;
