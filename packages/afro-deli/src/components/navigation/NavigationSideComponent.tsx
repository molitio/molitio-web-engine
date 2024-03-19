import React, { useEffect, useState } from 'react';
import { createStyles, makeStyles, Drawer, useTheme } from '@material-ui/core';
import NavigationSidePanelProps from './interface/NavigationSidePanelProps';
import { NavigationListComponent } from './NavigationListComponent';

export function NavigationSideComponent({ navigationState, toggle }: NavigationSidePanelProps): JSX.Element {
    type Anchor = 'top' | 'left' | 'bottom' | 'right';

    const [selectedAnchor, setSelectedAnchor] = useState<Anchor>('left');

    useEffect(() => {
        setSelectedAnchor('left');
    }, []);

    const theme = useTheme();

    const useStyles = makeStyles(() =>
        createStyles({
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
        }),
    );

    const componentStyle = useStyles();

    return (
        <>
            <div className={componentStyle.root}>
                <Drawer anchor={selectedAnchor} open={navigationState.sidePanel} onClose={toggle}>
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
}
