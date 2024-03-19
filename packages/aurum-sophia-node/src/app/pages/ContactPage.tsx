import React from 'react';
import { ContactComponent } from 'components/contact/ContactComponent';
import { AppContext } from '../services/siteDefaultsService';

const CONTACT_PAGE_TAG = 'aurum-sophia-contact-page';

export const ContactPage: React.FC = () => {
    const context = React.useContext(AppContext);
    return (
        <>
            <section>
                <ContactComponent pageTag={CONTACT_PAGE_TAG} />
            </section>
        </>
    );
};
