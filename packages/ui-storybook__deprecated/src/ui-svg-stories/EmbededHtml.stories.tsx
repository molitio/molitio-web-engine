import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CenterDisplay, EmbededHtml, StyledThemeContextProvider, ThemeNameTags } from '@molitio/ui-core__deprecated';

export default {
    title: 'molitio-core/SVG/gradients',
    component: EmbededHtml,
} as ComponentMeta<typeof EmbededHtml>;

export const EmbededHtmlComponent: ComponentStory<typeof EmbededHtml> = (args) => (
    <CenterDisplay>
        <StyledThemeContextProvider themeIdentifier={{ themeNameTag: ThemeNameTags.TEAM_JAMAICA }}>
            <EmbededHtml {...args}>
                <div id="embeded html">
                    <h1>some child element</h1>
                </div>
            </EmbededHtml>
        </StyledThemeContextProvider>
    </CenterDisplay>
);

EmbededHtmlComponent.parameters = {
    design: {
        type: 'figma',
        url: 'https://www.figma.com/file/mTsfvR8TrmINWvBHHsycKb/Molitio-Design?node-id=19%3A36',
    },
    controls: { hideNoControlsWarning: true },
};
