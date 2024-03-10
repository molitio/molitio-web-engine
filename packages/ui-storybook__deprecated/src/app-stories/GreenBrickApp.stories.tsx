import { ComponentStory, ComponentMeta } from '@storybook/react';
import { GreenBrickApp, GreenBrickLayout } from '../mock';

export default {
    title: 'molitio-core/Apps/Green Brick',
    args: { pageTitle: 'Landolo Page' },
    component: GreenBrickLayout,
} as ComponentMeta<typeof GreenBrickLayout>;

export const GreenBrick: ComponentStory<typeof GreenBrickLayout> = (args) => {
    return (
        <GreenBrickLayout {...args}>
            <GreenBrickApp />
        </GreenBrickLayout>
    );
};

GreenBrick.parameters = {
    design: {
        type: 'figma',
        url: 'https://www.figma.com/file/mTsfvR8TrmINWvBHHsycKb/Molitio-Design?node-id=19%3A36',
    },
    controls: { hideNoControlsWarning: true },
};
