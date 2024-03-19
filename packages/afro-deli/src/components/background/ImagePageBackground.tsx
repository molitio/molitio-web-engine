import React from 'react';
import { createStyles, makeStyles, useScrollTrigger, useTheme } from '@material-ui/core';

export function ImagePageBackground(): JSX.Element {
    const theme = useTheme();
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 64,
    });
    const useStyles = makeStyles(() =>
        createStyles({
            imageBackground: {
                position: 'fixed',
                top: trigger ? '48px' : '96px',
                backgroundImage: `url(${theme.themeBackgroundImage ? theme.themeBackgroundImage.imageUrl : ''})`,
                backgroundColor: 'transparent',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                minHeight: '100vh',
                minWidth: '100vw',
                zIndex: -90,
                opacity: theme.themeBackgroundImage ? theme.themeBackgroundImage.opacity : 1,
            },
        }),
    );

    const componentStyle = useStyles();

    return <div className={componentStyle.imageBackground}></div>;
}
