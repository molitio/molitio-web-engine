import React from 'react';

export interface FooterProps {
  licenceText?: string;
}

const Footer: React.FC<FooterProps> = (props) => {
  const { licenceText } = props;
  return (
/*     className="p-10 text-center bg-base-200 text-base-content" */
  <footer className="bg-gray-200 py-4">
    <div className="container mx-auto px-4">
    <p className="text-center">{licenceText}</p>
    </div>
  </footer>
  );
}

export default Footer;