import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core';
import logo from '../../images/afroDeliLogo.png';
export function SiteLogoComponent(): JSX.Element {
    const useStyles = makeStyles(() =>
        createStyles({
            logo: {
                height: '42px',
                width: '42px',
            },
            brand: {
                justifySelf: 'flex-end',
            },
        }),
    );

    const componentStyle = useStyles();
    return (
        <div>
            <img className={componentStyle.logo} src={logo} alt="Logo" />
        </div>
    );
}
