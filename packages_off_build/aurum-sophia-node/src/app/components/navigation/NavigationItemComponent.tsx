import React from 'react';
import { Link } from 'react-router-dom';
import { ListItem, Button, Icon } from '@material-ui/core';
import { NavigationItemComponentProps } from './interface/NavigationItemComponentProps';
import { AppContext, SiteDefaultIcon } from '../../services/siteDefaultsService';
import { createSiteStyle } from '../../styles/siteStyleBuilder';

export const NavigationItemComponent: React.FC<NavigationItemComponentProps> = ({
    siteFeature,
    displayIcons,
}: NavigationItemComponentProps) => {
    const context = React.useContext(AppContext);
    const theme = context.selectedTheme;

    const componentStyle = createSiteStyle({
        root: {
            zIndex: 100,
        },
        navLinkButton: {
            color: theme.palette.text.primary,
            width: '100%',
            height: '100%',
            justifyContent: 'left',
            marginLeft: 5,
            marginRight: 5,
        },
        navListItem: {
            margin: 0,
            padding: 0,
            '& :hover': {
                background: `linear-gradient(138deg, ${theme.palette.primary.main} 20%, ${theme.palette.background.default} 80%)`,
                '& a, span': {
                    background: 'rgba(0,0,0,0)',
                },
            },
        },
    });

    return (
        <>
            {siteFeature && (
                <ListItem button key={siteFeature.id} className={componentStyle.navListItem}>
                    <Button
                        className={componentStyle.navLinkButton}
                        component={Link}
                        to={siteFeature.path}
                        startIcon={
                            displayIcons && (
                                <Icon>
                                    {context.featureIconCollection.get(siteFeature.name)?.fontIcon ||
                                        SiteDefaultIcon.fontIcon}
                                </Icon>
                            )
                        }
                    >
                        {siteFeature.displayName}
                    </Button>
                </ListItem>
            )}
        </>
    );
};
