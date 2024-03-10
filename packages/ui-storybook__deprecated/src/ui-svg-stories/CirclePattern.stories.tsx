import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CenterDisplay, CirclePattern } from '@molitio/ui-core__deprecated';

export default {
    title: 'molitio-core/SVG/patterns',
    args: {
        r: 360,
        strokeWidth: 15,
        outerRimCount: 7,
    },
    component: CirclePattern,
} as ComponentMeta<typeof CirclePattern>;

export const CirclePatternComponent: ComponentStory<typeof CirclePattern> = (args) => (
    <CenterDisplay>
        <CirclePattern {...args} />
    </CenterDisplay>
);

CirclePatternComponent.parameters = {
    design: {
        type: 'figma',
        url: 'https://www.figma.com/file/mTsfvR8TrmINWvBHHsycKb/Molitio-Design?node-id=19%3A36',
    },
    controls: { hideNoControlsWarning: true },
};
