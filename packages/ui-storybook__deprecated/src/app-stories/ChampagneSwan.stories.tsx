import React from 'react';
import { createTheme } from '@mui/material';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {
    Page,
    MolitioNavBar,
    ChampagneSwanHomePage,
    AppShell,
    Footer,
    SegmentParams,
} from '@molitio/ui-core__deprecated';
import MuiThemeProvider from '../mock/components/MuiThemeProvider';
import { ChampagneSwanContextRoot, ChampagneSwanTheme } from '../mock';

type ChampagneSwanLayoutProps = {
    segmentParams?: Record<string, SegmentParams>;
};

const ChampagneSwanLayout: React.FC<ChampagneSwanLayoutProps & React.PropsWithChildren> = (props) => {
    const { children } = props;
    const muiDefault = createTheme();

    const appTheme = createTheme(muiDefault, {
        ...ChampagneSwanTheme,
    });

    return (
        <AppShell
            applyGlobalStyleRules
            externalTheme={appTheme}
            externalAppContextRoot={ChampagneSwanContextRoot}
            fontFamily="'Tenor Sans', sans-serif"
            fontFamilyHref="https://fonts.googleapis.com/css2?family=Tenor+Sans&display=swap"
        >
            <MuiThemeProvider externalTheme={appTheme}>
                <MolitioNavBar navHeight={'5em'} contactProps={{ contactInfoTextShadow: '0 2px 4px #8C7B6C' }} />
                {children}
                <Footer />
            </MuiThemeProvider>
        </AppShell>
    );
};

export default {
    title: 'molitio-core/Apps/Champagne Swan',
    args: {
        segmentParams: {
            hero: {
                pageName: 'home',
                backgroundType: 'image',
                heroIconType: 'drop-shadow',
                iconBorderRadius: '0.2em',
                innerPaddingTop: '2em',
                titleFontSize: '2.8rem',
                titleFontWeight: 'lighter',
                descriptionTextFontWeight: 'lighter',
                descriptionSubTextFontWeight: 'lighter',
                descriptionTextAlign: 'center',
                descriptionSubTextAlign: 'center',
                titleTextShadow: '0 2px 4px #8c7b6ccc',
                descriptionTextShadow: '0 1px 1.5px #8c7b6ccc',
                descriptionTextDimensions: { maxWidth: '18em' },
                descriptionSubTextDimensions: { maxWidth: '16em' },
                disableLineDecorator: true,
            },
        },
    },
    component: ChampagneSwanLayout,
} as ComponentMeta<typeof ChampagneSwanLayout>;

export const ChampagneSwan: ComponentStory<typeof ChampagneSwanLayout> = (args) => {
    const segmentParams = args?.segmentParams ?? { hero: { pageName: 'home' } };

    return (
        <ChampagneSwanLayout {...args}>
            <Page>
                <ChampagneSwanHomePage segmentParams={segmentParams} />
            </Page>
        </ChampagneSwanLayout>
    );
};

ChampagneSwan.parameters = {
    design: {
        type: 'figma',
        url: 'https://www.figma.com/file/mTsfvR8TrmINWvBHHsycKb/Molitio-Design?node-id=19%3A36',
    },
    controls: { hideNoControlsWarning: true },
};
