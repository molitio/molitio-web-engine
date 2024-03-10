import { ComponentStory, ComponentMeta } from '@storybook/react';
import { AppShell, IconGroup } from '@molitio/ui-core__deprecated';
import { createTheme } from '@mui/material';
import { MuiThemeProvider } from '../mock';
import {
    ChampagneSwanContextRoot,
    SleepingDragonContextRoot,
    SleepingDragonTheme,
    ChampagneSwanTheme,
    StyledComponentPadding,
    StyledTitleSpanBlock,
} from '../mock';

type IconGroupStoriesLayoutProps = {
    theme: typeof SleepingDragonTheme | typeof ChampagneSwanTheme;
};

const IconGroupStoriesLayout: React.FC<IconGroupStoriesLayoutProps & React.PropsWithChildren> = (props) => {
    const { children, theme } = props;
    const muiDefault = createTheme();

    switch (theme) {
        case SleepingDragonTheme:
            const sleepingDragonTheme = createTheme(muiDefault, { ...SleepingDragonTheme });
            return (
                <AppShell
                    applyGlobalStyleRules={true}
                    externalTheme={sleepingDragonTheme}
                    externalAppContextRoot={SleepingDragonContextRoot}
                >
                    <MuiThemeProvider theme={sleepingDragonTheme}>{children}</MuiThemeProvider>
                </AppShell>
            );

        case ChampagneSwanTheme:
            const champagenSwanTheme = createTheme(muiDefault, { ...ChampagneSwanTheme });

            return (
                <AppShell
                    applyGlobalStyleRules={true}
                    externalTheme={champagenSwanTheme}
                    externalAppContextRoot={ChampagneSwanContextRoot}
                >
                    <MuiThemeProvider theme={champagenSwanTheme}>{children}</MuiThemeProvider>
                </AppShell>
            );
        default:
            return <>{children}</>;
    }
};

export const IconGroupStory: ComponentStory<typeof IconGroupStoriesLayout> = () => (
    <StyledComponentPadding backgroundColor={'#eb07f7ff'}>
        <IconGroupStoriesLayout theme={ChampagneSwanTheme}>
            <StyledTitleSpanBlock rem={1.5} themeColor={'secondary'} textContent={`\u2102\u13D5 icon group`} />
            <IconGroup
                iconDefinitions={ChampagneSwanContextRoot?.contentRoot?.home?.leafs?.hero.iconDefinitions}
                iconBorderRadius="0.2em"
                heroIconType="drop-shadow"
                heroIconColors={['#purple', '#orange']}
            />
        </IconGroupStoriesLayout>
        <IconGroupStoriesLayout theme={SleepingDragonTheme}>
            <StyledTitleSpanBlock rem={1.5} themeColor={'primary'} textContent={`\u13D5\u15EB icon group`} />
            <IconGroup
                iconDefinitions={SleepingDragonContextRoot?.contentRoot?.home?.leafs?.hero.iconDefinitions}
                iconBorderRadius="1em"
                heroIconType="glowing"
                heroIconColors={['#purple', '#orange']}
            />
        </IconGroupStoriesLayout>
    </StyledComponentPadding>
);

IconGroupStory.parameters = {
    design: {
        type: 'figma',
        url: 'https://www.figma.com/file/mTsfvR8TrmINWvBHHsycKb/Molitio-Design?node-id=19%3A36',
    },
    controls: { hideNoControlsWarning: true },
};
export default {
    title: 'molitio-core/Components/Common',
    component: IconGroupStoriesLayout,
} as ComponentMeta<typeof IconGroupStoriesLayout>;
