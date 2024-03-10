import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CenterDisplay, ControlArrow } from '@molitio/ui-core__deprecated';

export default {
    title: 'molitio-core/Controls/Arrows',
    component: ControlArrow,
} as ComponentMeta<typeof ControlArrow>;

export const ArrowControl: ComponentStory<typeof ControlArrow> = () => (
    <CenterDisplay>
        <ControlArrow direction={'Right'} />
    </CenterDisplay>
);

ArrowControl.parameters = {
    design: {
        type: 'figma',
        url: 'https://www.figma.com/proto/mTsfvR8TrmINWvBHHsycKb/molitio-creatio?page-id=19%3A36&node-id=79%3A41&viewport=-37%2C-214%2C0.3&scaling=min-zoom',
    },
    controls: { hideNoControlsWarning: true },
};
