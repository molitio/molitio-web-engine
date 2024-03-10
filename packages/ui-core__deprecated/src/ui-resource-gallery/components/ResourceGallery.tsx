import React from 'react';
import CategoryBrowser from './CategoryBrowser';
import ResourceGalleryReducer from './ResourceGalleryReducer';
import { Gallery, MolitioComponent } from '../../ui-common';
import { ResourceGalleryActionType } from '../types';
import { ResourceGalleryContainer, ResourceGalleryResourcePreview, ResourceGalleryTitle } from '../styles';

type ResourceGalleryProps = {
    gallery?: Gallery;
};

const ResourceGallery: MolitioComponent<ResourceGalleryProps, Gallery, Record<string, string>> = (props) => {
    const { gallery } = props;

    const [resourceGalleryState, dispatch] = React.useReducer(ResourceGalleryReducer, {});

    const handleClick = () => {
        dispatch({ type: ResourceGalleryActionType.FOCUS_IMAGE });
    };

    return (
        <section>
            {props.gallery && (
                <ResourceGalleryContainer>
                    <div>
                        selected category: {resourceGalleryState.selectedCategoryTag}
                        <CategoryBrowser categories={gallery?.categories} />
                    </div>
                    <ResourceGalleryResourcePreview>
                        <ResourceGalleryTitle>{gallery?.name}</ResourceGalleryTitle>
                        <img
                            onClick={handleClick}
                            src="https://s3.eu-west-1.amazonaws.com/filestore.molitio.org/art-natalia/nature1.jpg"
                        />
                        <img src="https://s3.eu-west-1.amazonaws.com/filestore.molitio.org/art-natalia/nature2.jpg" />
                        <img src="https://s3.eu-west-1.amazonaws.com/filestore.molitio.org/art-natalia/nature3.jpg" />
                        <img src="https://s3.eu-west-1.amazonaws.com/filestore.molitio.org/art-natalia/natura4.jpg" />
                        <img src="https://s3.eu-west-1.amazonaws.com/filestore.molitio.org/art-natalia/still_life1.jpg" />
                        <img src="https://s3.eu-west-1.amazonaws.com/filestore.molitio.org/art-natalia/still_life2.jpg" />
                    </ResourceGalleryResourcePreview>
                </ResourceGalleryContainer>
            )}
        </section>
    );
};

export default ResourceGallery;
