import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

const DisplayResourceData: React.FC = (props) => {
    const {} = props;
    return <>resources</>;
};

export default {
    title: 'molitio-core/Data/ResourceDal',
    component: DisplayResourceData,
    args: {},
} as ComponentMeta<typeof DisplayResourceData>;

export const ResourceDalSandBox: ComponentStory<typeof DisplayResourceData> = (args) => (
    <DisplayResourceData {...args} />
);

ResourceDalSandBox.parameters = {
    design: {
        type: 'figma',
        url: 'https://www.figma.com/file/mTsfvR8TrmINWvBHHsycKb/Molitio-Design?node-id=19%3A36',
    },
    controls: { hideNoControlsWarning: true },
};
