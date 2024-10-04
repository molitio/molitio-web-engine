import React from 'react';

export interface FooterProps {
    licenceText?: string;
}

const Footer: React.FC<FooterProps> = (props) => {
    const { licenceText } = props;
    return (
        <footer className="footer bg-gray-200 py-4 fixed bottom-0 left-0 w-full">
            <div className="container mx-auto px-4">
                <p className="text-center">{licenceText}</p>
            </div>
        </footer>
    );
};

export default Footer;
