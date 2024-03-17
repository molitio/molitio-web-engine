import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton } from '@material-ui/core';
import { NavigationSideComponent } from './NavigationSideComponent';
import { TitleComponent } from '../common/TitleComponent';
import { Icon } from '@material-ui/core';
import { useScrollTrigger } from '@material-ui/core';
import { NavigationListComponent } from './NavigationListComponent';
import { AppContext, SiteDefaultIcon } from '../../services/siteDefaultsService';
import { createSiteStyle } from '../../styles/siteStyleBuilder';

export const NavigationTopComponent: React.FC = () => {
    const context = React.useContext(AppContext);
    const theme = context.selectedTheme;
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 64,
    });

    const componentStyle = createSiteStyle({
        navigationTopContainer: {
            zIndex: 100,
            position: 'sticky',
            top: 0,
        },
        appBar: {
            color: theme.palette.text.primary,
            opacity: 0.9,
            ...theme.themeGradientBackground,
        },
        menuButton: {
            color: theme.palette.text.primary,
        },
        menuButtonContainer: {
            marginRight: 0,
            '& :hover': {
                ...theme.hooverActionOn,
                '& span': {
                    ...theme.hooverActionOff,
                },
            },
        },
        menuRow: {
            [theme.breakpoints.down('xs')]: { display: 'none' },
        },
        titleToolBar: {
            top: 0,
            position: 'sticky',
        },
        title: {
            marginLeft: trigger ? '0px' : '32px',
        },
    });

    const [navigationState, setnavigationState] = useState({
        sidePanel: false,
    });

    const toggleSidePanel = (): void => {
        setnavigationState({ sidePanel: !navigationState.sidePanel });
    };

    return (
        <>
            <div className={componentStyle.navigationTopContainer}>
                <AppBar className={componentStyle.appBar}>
                    <div>
                        <NavigationSideComponent navigationState={navigationState} toggle={toggleSidePanel} />
                        {/*     <Collapse appear={true} in={!trigger}> */}
                        <Toolbar variant="dense"></Toolbar>
                        {/* </Collapse> */}
                    </div>
                    <div className={componentStyle.titleToolBar}>
                        <Toolbar variant="dense">
                            {trigger && (
                                <div className={componentStyle.menuButtonContainer}>
                                    <IconButton
                                        edge="start"
                                        className={componentStyle.menuButton}
                                        aria-label="menu"
                                        onClick={toggleSidePanel}
                                    >
                                        <Icon>
                                            {context.siteIconCollection.get('menu')?.fontIcon ||
                                                SiteDefaultIcon.fontIcon}
                                        </Icon>
                                    </IconButton>
                                </div>
                            )}
                            {!navigationState.sidePanel && (
                                <div className={componentStyle.title}>
                                    <TitleComponent horizontal={true} />
                                </div>
                            )}
                        </Toolbar>
                    </div>

                    {!trigger && (
                        <Toolbar variant="dense">
                            <div className={componentStyle.menuButtonContainer}>
                                <IconButton
                                    edge="start"
                                    className={componentStyle.menuButton}
                                    aria-label="menu"
                                    onClick={toggleSidePanel}
                                >
                                    <Icon>
                                        {context.siteIconCollection.get('menu')?.fontIcon || SiteDefaultIcon.fontIcon}
                                    </Icon>
                                </IconButton>
                            </div>
                            <div className={componentStyle.menuRow}>
                                {!navigationState.sidePanel && (
                                    <NavigationListComponent horizontal={true} displayIcons={false} />
                                )}
                            </div>
                        </Toolbar>
                    )}
                </AppBar>
            </div>
        </>
    );
};
