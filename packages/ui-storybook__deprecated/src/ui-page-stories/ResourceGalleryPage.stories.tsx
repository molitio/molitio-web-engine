import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ResourceGalleryPage } from '@molitio/ui-core__deprecated';

import { fillCategories } from '../mock';

export default {
    title: 'molitio-core/Pages/Resource Gallery',
    component: ResourceGalleryPage,
    args: {
        gallery: { name: 'Art Galéria', categories: fillCategories() },
    },
} as ComponentMeta<typeof ResourceGalleryPage>;

export const PaintingGalleryPage: ComponentStory<typeof ResourceGalleryPage> = (args) => (
    <ResourceGalleryPage gallery={args.gallery}></ResourceGalleryPage>
);

PaintingGalleryPage.parameters = {
    design: {
        type: 'figma',
        url: 'https://www.figma.com/file/mTsfvR8TrmINWvBHHsycKb/Molitio-Design?node-id=19%3A36',
    },
    controls: { hideNoControlsWarning: true },
};
