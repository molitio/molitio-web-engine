import React, { useContext } from 'react';
import { List, Divider, createStyles, makeStyles, useTheme } from '@material-ui/core';
import { Context } from '../../App';
import { ThemeButtonsComponent } from '../common/ThemeButtonsComponent';
import { TitleComponent } from '../common/TitleComponent';
import { NavigationItemComponent } from './NavigationItemComponent';
import { NavigationListComponentProps } from './interface/NavigationListComponentProps';

export function NavigationListComponent({ horizontal, displayIcons }: NavigationListComponentProps): JSX.Element {
    const context = useContext(Context);
    const theme = useTheme();
    const useStyles = makeStyles(() =>
        createStyles({
            navList: {
                display: 'flex',
                flexDirection: horizontal ? 'row' : 'column',
                alignItems: 'center',
                justifyContent: 'center',
                [theme.breakpoints.up('xs')]: {
                    /* width: '100vw', */
                },
            },
            title: {},
        }),
    );

    const componentStyle = useStyles();
    return (
        <>
            {!horizontal && <TitleComponent horizontal={horizontal} />}
            <List className={componentStyle.navList}>
                {Array.from(context.featureContext.features.values())
                    .filter((isNavOption) => isNavOption.isNavOption)
                    .map((feature) => (
                        <NavigationItemComponent key={feature.id} siteFeature={feature} displayIcons={displayIcons} />
                    ))}
                {!horizontal && <ThemeButtonsComponent />}
            </List>
            <Divider />
        </>
    );
}
