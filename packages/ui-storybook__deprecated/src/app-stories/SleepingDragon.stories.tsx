import React from 'react';
import { createTheme } from '@mui/material';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Page, MolitioHomePage, MolitioNavBar, AppShell, SegmentParams, Footer } from '@molitio/ui-core__deprecated';
import MuiThemeProvider from '../mock/components/MuiThemeProvider';
import { SleepingDragonContextRoot, SleepingDragonTheme } from '../mock';

type ChampagneSwanLayoutProps = {
    segmentParams?: Record<string, SegmentParams>;
};

const SleepingDragonLayout: React.FC<ChampagneSwanLayoutProps & React.PropsWithChildren> = (props) => {
    const { children } = props;
    const muiDefault = createTheme();

    const appTheme = createTheme(muiDefault, {
        ...SleepingDragonTheme,
    });

    return (
        <AppShell
            applyGlobalStyleRules={true}
            externalTheme={appTheme}
            externalAppContextRoot={SleepingDragonContextRoot}
            fontFamily="'Jura', sans-serif"
            fontFamilyHref="https://fonts.googleapis.com/css2?family=Jura&family=Tenor+Sans&display=swap"
        >
            <MuiThemeProvider theme={appTheme}>
                <MolitioNavBar />
                {children}
                <Footer fixed={false} />
            </MuiThemeProvider>
        </AppShell>
    );
};

export default {
    title: 'molitio-core/Apps/Sleeping Dragon',
    args: {
        segmentParams: {
            hero: {
                pageName: 'home',
                descriptionTextAlign: 'justify',
                iconBorderRadius: '1em',
                innerPaddingTop: '6em',
                heroIconType: 'glowing',
                descriptionTextDimensions: { maxWidth: '18em' },
            },
        },
    },
    component: SleepingDragonLayout,
} as ComponentMeta<typeof SleepingDragonLayout>;

export const SleepingDragon: ComponentStory<typeof SleepingDragonLayout> = (args) => {
    const segmentParams = args?.segmentParams ?? { hero: { pageName: 'home' } };

    return (
        <SleepingDragonLayout {...args}>
            <Page>
                <MolitioHomePage segmentParams={segmentParams} />
            </Page>
        </SleepingDragonLayout>
    );
};

SleepingDragon.parameters = {
    design: {
        type: 'figma',
        url: 'https://www.figma.com/file/mTsfvR8TrmINWvBHHsycKb/Molitio-Design?node-id=19%3A36',
    },
    controls: { hideNoControlsWarning: true },
};
