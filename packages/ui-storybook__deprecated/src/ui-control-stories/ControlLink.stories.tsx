import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CenterDisplay, ControlLink } from '@molitio/ui-core__deprecated';

export default {
    title: 'molitio-core/Controls/Link',
    component: ControlLink,
} as ComponentMeta<typeof ControlLink>;

export const LinkControls: ComponentStory<typeof ControlLink> = () => (
    <CenterDisplay>
        <ControlLink />
    </CenterDisplay>
);

LinkControls.parameters = {
    design: {
        type: 'figma',
        url: 'https://www.figma.com/proto/mTsfvR8TrmINWvBHHsycKb/molitio-creatio?page-id=19%3A36&node-id=113%3A54&viewport=-37%2C-214%2C0.3&scaling=min-zoom',
    },
    controls: { hideNoControlsWarning: true },
};
