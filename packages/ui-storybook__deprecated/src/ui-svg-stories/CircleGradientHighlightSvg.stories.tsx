import { ComponentStory, ComponentMeta } from '@storybook/react';
import {
    CenterDisplay,
    CircleGradientHighlight,
    StyledThemeContextProvider,
    ThemeNameTags,
} from '@molitio/ui-core__deprecated';

export default {
    title: 'molitio-core/SVG/gradients',
    component: CircleGradientHighlight,
} as ComponentMeta<typeof CircleGradientHighlight>;

export const CircleGradientHighlightComponent: ComponentStory<typeof CircleGradientHighlight> = (args) => (
    <CenterDisplay>
        <StyledThemeContextProvider
            themeIdentifier={{
                themeNameTag: ThemeNameTags.DEFAULT,
            }}
        >
            <CircleGradientHighlight {...args}>
                <>
                    <h1>some child element</h1>
                </>
            </CircleGradientHighlight>
        </StyledThemeContextProvider>
    </CenterDisplay>
);

CircleGradientHighlightComponent.parameters = {
    design: {
        type: 'figma',
        url: 'https://www.figma.com/file/mTsfvR8TrmINWvBHHsycKb/Molitio-Design?node-id=19%3A36',
    },
    controls: { hideNoControlsWarning: true },
};
