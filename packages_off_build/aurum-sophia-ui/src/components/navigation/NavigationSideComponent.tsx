import React, { createRef, useEffect, useState } from 'react';
import { Drawer } from '@material-ui/core';
import NavigationSidePanelProps from './interface/NavigationSidePanelProps';
import { NavigationListComponent } from './NavigationListComponent';
import { AppContext } from '../../services/siteDefaultsService';
import { createSiteStyle } from '../../styles/siteStyleBuilder';

export const NavigationSideComponent: React.FC<NavigationSidePanelProps> = ({
    navigationState,
    toggle,
}: NavigationSidePanelProps) => {
    type Anchor = 'top' | 'left' | 'bottom' | 'right';

    const [selectedAnchor, setSelectedAnchor] = useState<Anchor>('left');

    const navigationSideComponentRef = createRef();

    useEffect(() => {
        setSelectedAnchor('left');
    }, []);

    const context = React.useContext(AppContext);
    const theme = context.selectedTheme;

    const componentStyle = createSiteStyle({
        root: {
            zIndex: 100,
        },
        drawerContent: {
            backgroundColor: theme.palette.background.default,
            minHeight: '100vh',
            /*  [theme.breakpoints.up('xs')]: {
                    anchor: setSelectedAnchor('top'),
                }, */
        },
        navList: {
            backgroundColor: theme.palette.background.default,
            display: 'flex',
            minHeight: '100vh',
            flexDirection: 'column',
            [theme.breakpoints.up('xs')]: {
                /* width: '100vw', */
            },
        },
    });

    return (
        <>
            <div className={componentStyle.root}>
                <Drawer
                    anchor={selectedAnchor}
                    open={navigationState.sidePanel}
                    onClose={toggle}
                    ref={navigationSideComponentRef}
                >
                    <div
                        className={componentStyle.drawerContent}
                        role="presentation"
                        onClick={toggle}
                        onKeyDown={toggle}
                    >
                        <NavigationListComponent horizontal={false} displayIcons={true} />
                    </div>
                </Drawer>
            </div>
        </>
    );
};
