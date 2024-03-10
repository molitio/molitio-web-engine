import { ComponentStory, ComponentMeta } from '@storybook/react';
import {
    ButtonStyleVariantTags,
    CenterDisplay,
    DynamicButton,
    StyledThemeContextProvider,
} from '@molitio/ui-core__deprecated';

export default {
    title: 'molitio-core/Controls/Buttons',
    component: DynamicButton,
    args: {
        label: 'Dynamic Button',
        styleVariant: ButtonStyleVariantTags.Default,
    },
} as ComponentMeta<typeof DynamicButton>;

export const DynamicButtonComponent: ComponentStory<typeof DynamicButton> = (args) => (
    <CenterDisplay>
        <DynamicButton {...args}>Click Me!</DynamicButton>
    </CenterDisplay>
);

DynamicButtonComponent.parameters = {
    design: {
        type: 'figma',
        url: 'https://www.figma.com/file/mTsfvR8TrmINWvBHHsycKb/Molitio-Design?node-id=19%3A36',
    },
    controls: { hideNoControlsWarning: true },
};

export const RoundedButton: ComponentStory<typeof DynamicButton> = () => (
    <CenterDisplay>
        <DynamicButton styleVariant={ButtonStyleVariantTags.ButtonRounded} label="DO CLICK ME">
            Click Me!
        </DynamicButton>
    </CenterDisplay>
);

RoundedButton.parameters = {
    design: {
        type: 'figma',
        url: 'https://www.figma.com/file/mTsfvR8TrmINWvBHHsycKb/Molitio-Design?node-id=19%3A36',
    },
    controls: { hideNoControlsWarning: true },
};

export const RectangleButton: ComponentStory<typeof StyledThemeContextProvider> = () => (
    <CenterDisplay>
        <DynamicButton styleVariant={ButtonStyleVariantTags.ButtonRectangle}>Click Me!</DynamicButton>
    </CenterDisplay>
);

RectangleButton.parameters = {
    design: {
        type: 'figma',
        url: 'https://www.figma.com/file/mTsfvR8TrmINWvBHHsycKb/Molitio-Design?node-id=19%3A36',
    },
    controls: { hideNoControlsWarning: true },
};
