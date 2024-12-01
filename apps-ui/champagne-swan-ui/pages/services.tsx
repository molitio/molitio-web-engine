import { NextPage } from 'next';
import { ServicesContent, ServicesCover } from '../components/services';
import { ContactInfo } from '../components/contact';

const ServicesPage: NextPage = () => {
    return (
        <main>
            <ServicesCover />
            <ServicesContent />
            <ContactInfo />
        </main>
    );
};

export default ServicesPage;
