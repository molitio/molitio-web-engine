import React from 'react';

import ContactTableRow from '../../ui-common/components/ContactTableRow';
import ContactTable from '../../ui-common/components/ContextTable';

import {
    StyledContact,
    StyledContactContent,
    StyledContactTitle,
    StyledContactContainer,
    StyledContactImage,
    StyledInlineTextNumbers,
    StyledContactInfoIcon,
    StyledContactInfoIconContainer,
    StyledContactLogo,
    StyledContactInfoAnchor,
    StyledContactForm,
} from '../styles';
import { ContactInfoSegment } from '../../ui-contact';

type ContactProps = {
    title?: string;
    logoUrl?: string;
    backgroundImageUrl?: string;
    contactInfoCollection?: Record<string, ContactInfoSegment>;
    contactForm?: React.ReactNode;
};

const ContactPage: React.FC<ContactProps> = (props) => {
    const { title, logoUrl, contactInfoCollection, backgroundImageUrl, contactForm } = props;

    return (
        <StyledContact>
            <StyledContactImage backgrounImageUrl={backgroundImageUrl}>
                <StyledContactContent>
                    <StyledContactTitle>{title}</StyledContactTitle>
                    <StyledContactContainer>
                        <StyledContactForm>{contactForm ?? null}</StyledContactForm>
                        <ContactTable
                            rows={Array.from(
                                Object.keys(contactInfoCollection ?? {}).map((key) => {
                                    return (
                                        <ContactTableRow
                                            key={key}
                                            icon={
                                                <StyledContactInfoIcon
                                                    src={contactInfoCollection?.[key]?.iconUrl}
                                                    alt={contactInfoCollection?.[key]?.iconUrlAlt}
                                                />
                                            }
                                            iconSpacing={{
                                                margin: '0 0 0 -10px',
                                            }}
                                            text={
                                                <StyledInlineTextNumbers>
                                                    <StyledContactInfoAnchor
                                                        target="_blank"
                                                        href={contactInfoCollection?.[key]?.href}
                                                    >
                                                        {contactInfoCollection?.[key]?.displayedText}
                                                    </StyledContactInfoAnchor>
                                                </StyledInlineTextNumbers>
                                            }
                                        />
                                    );
                                }),
                            )}
                        />
                    </StyledContactContainer>
                    <StyledContactInfoIconContainer>
                        <StyledContactLogo src={logoUrl} alt="logo" />
                    </StyledContactInfoIconContainer>
                </StyledContactContent>
            </StyledContactImage>
        </StyledContact>
    );
};

export default ContactPage;
