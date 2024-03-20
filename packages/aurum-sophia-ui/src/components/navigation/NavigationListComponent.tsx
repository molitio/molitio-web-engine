import React from 'react';
import { List, Divider } from '@material-ui/core';
import { ThemeButtonGroupComponent } from '../common/ThemeButtonGroupComponent';
import { TitleComponent } from '../common/TitleComponent';
import { NavigationItemComponent } from './NavigationItemComponent';
import { NavigationListComponentProps } from './interface/NavigationListComponentProps';
import { AppContext } from '../../services/siteDefaultsService';
import { createSiteStyle } from '../../styles/siteStyleBuilder';

export const NavigationListComponent: React.FC<NavigationListComponentProps> = ({
    horizontal,
    displayIcons,
}: NavigationListComponentProps) => {
    const context = React.useContext(AppContext);
    const theme = context.selectedTheme;

    const componentStyle = createSiteStyle({
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
    });

    return (
        <>
            {!horizontal && <TitleComponent horizontal={horizontal} />}
            <List className={componentStyle.navList}>
                {Array.from(context.featureCollection.values())
                    .filter((isNavOption) => isNavOption.isNavOption)
                    .map((feature) => (
                        <NavigationItemComponent key={feature.id} siteFeature={feature} displayIcons={displayIcons} />
                    ))}
                {!horizontal && <ThemeButtonGroupComponent />}
            </List>
            <Divider />
        </>
    );
};
