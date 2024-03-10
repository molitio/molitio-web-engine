import React, { useState } from 'react';
import { useTheme, makeStyles, createStyles } from '@material-ui/core';
import { MenuItem, PagedMenuComponent, MenuPageDataCollection } from '@molitio/ui-core';
import { useEffect } from 'react';
import { menuPageCollection } from '../services/menuPageService';

export function LandingPage(): JSX.Element {
    const theme = useTheme();
    const useStyles = makeStyles(() =>
        createStyles({
            landing: {
                display: 'flex',
                flexDirection: 'column',
            },
            paper: {
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                background: `linear-gradient(138deg, ${theme.palette.primary.light} 10%, ${theme.palette.background.default} 100%)`,
                [theme.breakpoints.up('sm')]: {
                    marginLeft: '15vw',
                    marginRight: '15vw',
                },
            },
            pageContent: {
                margin: '10px 0px',
                border: 1,
                borderStyle: 'solid',
                borderRadius: 10,
                height: '2000px',
                borderColor: theme.palette.secondary.main,
                boxShadow: theme.shadows[5],
            },
        }),
    );

    const pageStyle = useStyles();
    const [pageCollection, setItemList] = useState<MenuPageDataCollection>(menuPageCollection());

    return (
        <div className={pageStyle.landing}>
            <div className={pageStyle.pageContent}>
                <PagedMenuComponent menuPages={pageCollection.menuPages} />
            </div>
        </div>
    );
}
