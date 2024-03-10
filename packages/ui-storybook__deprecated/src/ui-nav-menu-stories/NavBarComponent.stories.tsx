import { ComponentStory, ComponentMeta } from '@storybook/react';
import { MolitioNavBar, SystemContextProvider, ThemeNameTags } from '@molitio/ui-core__deprecated';

export default {
    title: 'molitio-core/Layout/Nav Bar',
    component: MolitioNavBar,
    args: {},
} as ComponentMeta<typeof MolitioNavBar>;

export const NavBarStory: ComponentStory<typeof MolitioNavBar> = () => (
    <SystemContextProvider
        appName="storybook Nav Bar example"
        themeIdentifier={{ themeNameTag: ThemeNameTags.TEAM_JAMAICA }}
        navRoot={{
            home: {
                label: 'Home',
                path: '/',
            },
            gallery: { label: 'GALÉRIA', path: '#gallery' },
            services: { label: 'SZOLGÁLTATÁSOK', path: '#services' },
            about: { label: 'RÓLUNK', path: '#about' },
            contact: { label: 'KAPCSOLAT', path: '#contact' },
        }}
    >
        <MolitioNavBar />
    </SystemContextProvider>
);

NavBarStory.parameters = {
    design: {
        type: 'figma',
        url: 'https://www.figma.com/file/mTsfvR8TrmINWvBHHsycKb/Molitio-Design?node-id=19%3A36',
    },
    controls: { hideNoControlsWarning: true },
};
