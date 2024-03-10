import {
    AboutPage,
    ContactPage,
    Footer,
    HomePage,
    IntroductionPage,
    Page,
    ServicesPage,
    SystemContext,
} from '@molitio/ui-core__deprecated';
import React from 'react';

const GreenBrickApp: React.FC = () => {
    const systemContext = React.useContext(SystemContext);
    const contactLeafs = systemContext?.contentRoot?.contact?.leafs;
    const textContent = contactLeafs?.contactInfo?.textContent;
    const assetUrls = contactLeafs?.contactInfo?.assetUrls;
    return (
        <main>
            <Page id="home">
                <HomePage />
            </Page>
            <Page id="services">
                <ServicesPage />
            </Page>
            <Page id="about">
                <AboutPage />
            </Page>
            <Page id="introduction">
                <IntroductionPage />
            </Page>
            <Page minHeight={`700px`} id="contact">
                <ContactPage
                    title={textContent?.title ?? ''}
                    logoUrl={assetUrls?.logo ?? ''}
                    backgroundImageUrl={assetUrls?.backgroundImage ?? ''}
                    contactInfoCollection={{
                        phoneMain: {
                            type: 'tel',
                            iconUrl: assetUrls?.phoneMainIcon ?? '',
                            displayedText: textContent?.phoneMain ?? '',
                            href: assetUrls?.phoneMainHref ?? '',
                        },
                        phoneSecondary: {
                            type: 'tel',
                            iconUrl: assetUrls?.phoneSecondaryIcon ?? '',
                            displayedText: textContent?.phoneSecondary ?? '',
                            href: assetUrls?.phoneSecondaryHref ?? '',
                        },
                        email: {
                            type: 'email',
                            iconUrl: assetUrls?.emailIcon ?? '',
                            displayedText: textContent?.email ?? '',
                            href: assetUrls?.emailHref ?? '',
                        },
                        address: {
                            type: 'address',
                            iconUrl: assetUrls?.addressIcon ?? '',
                            displayedText: textContent?.address ?? '',
                            href: assetUrls?.addressHref ?? '',
                        },
                    }}
                    contactForm={
                        <div style={{ maxWidth: '20em' }}>
                            <input placeholder="text"></input>
                        </div>
                    }
                />
            </Page>
            <Footer />
        </main>
    );
};

export default GreenBrickApp;
