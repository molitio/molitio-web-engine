import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CenterDisplay, PatternFill, StyledThemeContextProvider, ThemeNameTags } from '@molitio/ui-core__deprecated';

export default {
    title: 'molitio-core/SVG/gradients',
    args: {
        isBackground: true,
        fillColor: 'purple',
        patternStroke: 'yellow',
        patternStrokeWidth: 80,
        rotateDegrees: -45,
        opacity: 0.5,
    },
    component: PatternFill,
} as ComponentMeta<typeof PatternFill>;

export const PatternFillComponent: ComponentStory<typeof PatternFill> = (args) => (
    <CenterDisplay>
        <StyledThemeContextProvider themeIdentifier={{ themeNameTag: ThemeNameTags.TEAM_JAMAICA }}>
            <PatternFill {...args} />
        </StyledThemeContextProvider>
    </CenterDisplay>
);

PatternFillComponent.parameters = {
    design: {
        type: 'figma',
        url: 'https://www.figma.com/file/mTsfvR8TrmINWvBHHsycKb/Molitio-Design?node-id=19%3A36',
    },
    controls: { hideNoControlsWarning: true },
};
