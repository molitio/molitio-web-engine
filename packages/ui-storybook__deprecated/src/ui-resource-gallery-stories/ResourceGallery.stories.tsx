import { ComponentStory, ComponentMeta } from '@storybook/react';
import { AppShell, ResourceGalleryPage } from '@molitio/ui-core__deprecated';

import { fillCategories } from '../mock';

const storyArgs = {
    gallery: { name: 'Galéria', categories: fillCategories() },
};

export default {
    title: 'molitio-core/Components/Resource Gallery',
    component: ResourceGalleryPage,
    args: {
        ...storyArgs,
    },
} as ComponentMeta<typeof ResourceGalleryPage>;

export const PaintingGalleryPage: ComponentStory<typeof ResourceGalleryPage> = (args) => (
    <AppShell applyGlobalStyleRules>
        <ResourceGalleryPage gallery={args.gallery}></ResourceGalleryPage>
    </AppShell>
);

PaintingGalleryPage.parameters = {
    design: {
        type: 'figma',
        url: 'https://www.figma.com/file/mTsfvR8TrmINWvBHHsycKb/Molitio-Design?node-id=19%3A36',
    },
    controls: { hideNoControlsWarning: true },
};
