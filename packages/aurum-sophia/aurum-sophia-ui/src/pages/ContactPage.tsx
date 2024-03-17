import React from 'react';
import { ContactComponent } from '../components/contact/ContactComponent';

const CONTACT_PAGE_TAG = 'aurum-sophia-contact-page';

export const ContactPage: React.FC = () => {
    return (
        <>
            <section>
                <ContactComponent pageTag={CONTACT_PAGE_TAG} />
            </section>
        </>
    );
};
