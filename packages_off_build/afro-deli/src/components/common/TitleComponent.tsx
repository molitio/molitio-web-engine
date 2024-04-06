import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { createStyles, makeStyles, Typography, useTheme } from '@material-ui/core';
import { SiteLogoComponent } from './SiteLogoComponent';
import { TitleComponentProps } from './interface/TitleComponentProps';

export function TitleComponent({ horizontal }: TitleComponentProps): JSX.Element {
    const theme = useTheme();
    const useStyles = makeStyles(() =>
        createStyles({
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
        }),
    );

    const componentStyle = useStyles();
    return (
        <div className={componentStyle.title}>
            <div className={componentStyle.logoContainer}>
                <SiteLogoComponent />
            </div>
            <div className={componentStyle.titleContainer}>
                <RouterLink to="/">
                    <div className={componentStyle.titleText}>
                        <Typography variant="h5" component="h1">
                            Afro Deli {!horizontal && <br />}
                            and coffee
                        </Typography>
                    </div>
                </RouterLink>
            </div>
        </div>
    );
}
