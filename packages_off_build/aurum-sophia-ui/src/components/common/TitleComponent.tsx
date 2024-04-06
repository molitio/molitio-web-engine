import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Typography } from '@material-ui/core';
import { SiteLogoComponent } from './SiteLogoComponent';
import { TitleComponentProps } from './interface/TitleComponentProps';
import { AppContext } from '../../services/siteDefaultsService';
import { createSiteStyle } from '../../styles/siteStyleBuilder';

export const TitleComponent: React.FC<TitleComponentProps> = ({ horizontal }: TitleComponentProps) => {
    const context = React.useContext(AppContext);
    const theme = context.selectedTheme;

    const componentStyle = createSiteStyle({
        title: {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'flex-end',
            margin: '3px',
            padding: 0,
            '& :hover': {
                ...theme.hooverActionOn,
                '& h5, a': {
                    ...theme.hooverActionOff,
                },
            },
            '& h5': {
                padding: 0,
                minHeight: '42px',
            },
        },
        titleContainer: {
            border: 0,
            borderRadius: 5,
            '& a': {
                color: theme.palette.text.primary,
                padding: 0,
            },
            '& :link, :visited': {
                textDecoration: 'none',
            },
        },
        titleText: {
            display: 'flex',
            flexDirection: horizontal ? 'row' : 'column',
            alignItems: 'flex-end',
        },
        logoContainer: {
            height: '42px',
            width: '42px',
        },
    });

    return (
        <div className={componentStyle.title}>
            <div className={componentStyle.logoContainer}>
                <SiteLogoComponent />
            </div>
            <div className={componentStyle.titleContainer}>
                <RouterLink to="/">
                    <div className={componentStyle.titleText}>
                        <Typography variant="h5" component="h1">
                            Aurum Sophia {!horizontal && <br />}
                            Alapítvány
                        </Typography>
                    </div>
                </RouterLink>
            </div>
        </div>
    );
};
