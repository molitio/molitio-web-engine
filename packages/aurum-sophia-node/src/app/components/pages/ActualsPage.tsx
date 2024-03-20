import React from 'react';
import { EventsComponent } from 'components/events/EventsComponent';
import { AppContext } from '../../services/siteDefaultsService';
import { createSiteStyle } from 'components/styles/siteStyleBuilder';
import { ActualsComponent } from 'components/actuals/ActualsComponent';

const ACTUALS_PAGE_TAG = 'aurum-sophia-actuals-page';
const EVENTS_PAGE_TAG = 'aurum-sophia-actuals-page-events';

export const ActualsPage: React.FC = () => {
    const context = React.useContext(AppContext);
    const theme = context.selectedTheme;

    const pageStyle = createSiteStyle({
        pageContent: {
            display: 'flex',
            flexDirection: 'column',
            color: theme.palette.text.primary,
            padding: '10px 0px',
            marginBottom: '10px',
            border: 0,
            borderStyle: 'solid',
            borderRadius: 10,
            borderColor: theme.palette.secondary.main,
            boxShadow: theme.shadows[5],
            opacity: 0.9,
            /* backgroundColor: 'transparent', */
            ...theme.themeGradientBackground,
        },
        content: {
            flex: 1,
        },
    });

    return (
        <>
            <section className={pageStyle.pageContent}>
                <section className={pageStyle.content}>
                    <ActualsComponent pageTag={ACTUALS_PAGE_TAG} />
                </section>
                <section className={pageStyle.content}>
                    <EventsComponent pageTag={EVENTS_PAGE_TAG} />
                </section>
            </section>
        </>
    );
};
