import { NextPage } from 'next';
import { ContactCover, ContactInfo } from '../components/contact';

const ContactPage: NextPage = () => {
    return (
        <main>
            <ContactCover />
            <ContactInfo />
        </main>
    );
};

export default ContactPage;
