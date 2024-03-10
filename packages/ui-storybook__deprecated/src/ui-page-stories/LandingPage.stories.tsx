import { ComponentStory, ComponentMeta } from '@storybook/react';
import { LandingPage } from '@molitio/ui-core__deprecated';

export default {
    title: 'molitio-core/Pages/Landing Page',
    args: { pageTitle: 'Landolo Page' },
    component: LandingPage,
} as ComponentMeta<typeof LandingPage>;

export const DefaultLandingPage: ComponentStory<typeof LandingPage> = (args) => (
    <LandingPage {...args}>
        <h1>új title</h1>
        <img
            width="1024"
            alt="Girasoli in Mugello"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Girasoli_in_Mugello.jpg/1024px-Girasoli_in_Mugello.jpg"
        />
    </LandingPage>
);

DefaultLandingPage.parameters = {
    design: {
        type: 'figma',
        url: 'https://www.figma.com/file/mTsfvR8TrmINWvBHHsycKb/Molitio-Design?node-id=19%3A36',
    },
    controls: { hideNoControlsWarning: true },
};
