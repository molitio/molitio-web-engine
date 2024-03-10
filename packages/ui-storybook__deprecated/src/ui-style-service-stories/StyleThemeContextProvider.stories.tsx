import { ComponentMeta, ComponentStory } from '@storybook/react';
import { CenterDisplay, DynamicButton, StyledThemeContextProvider, ThemeNameTags } from '@molitio/ui-core__deprecated';

export default {
    title: 'molitio-core/Theme/Styled Theme Context',
    component: StyledThemeContextProvider,
    argTypes: {
        themeIdentifier: {
            themeNameTag: { control: 'select', options: ThemeNameTags },
        },
    },
    args: { themeIdentifier: { themeNameTag: ThemeNameTags.DEFAULT } },
} as ComponentMeta<typeof StyledThemeContextProvider>;

export const ThemeContextWrappedButton: ComponentStory<typeof StyledThemeContextProvider> = (args) => {
    return (
        <StyledThemeContextProvider {...args}>
            <CenterDisplay>
                <DynamicButton>Rounded Button</DynamicButton>
                <DynamicButton>Rectangle Button</DynamicButton>
            </CenterDisplay>
        </StyledThemeContextProvider>
    );
};

ThemeContextWrappedButton.parameters = {
    design: {
        type: 'figma',
        url: 'https://www.figma.com/file/mTsfvR8TrmINWvBHHsycKb/Molitio-Design?node-id=19%3A36',
    },
    controls: { hideNoControlsWarning: true },
};
