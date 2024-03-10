import React from 'react';
import { Gallery } from '../../ui-common';
import { ResourceGallery } from '../../ui-resource-gallery';

type ResourceGalleryPageProps = {
    gallery?: Gallery;
};

const ResourceGalleryPage: React.FC<ResourceGalleryPageProps> = (props) => {
    const { gallery } = props;

    return <ResourceGallery gallery={gallery ?? { name: 'N/A' }} />;
};

export default ResourceGalleryPage;
