import React from 'react';
import { EventsComponent } from 'components/events/EventsComponent';
import { AppContext } from '../services/siteDefaultsService';
import { createSiteStyle } from '../styles/siteStyleBuilder';

const PAGE_TAG = 'aurum-sophia-events-page';

export const EventsPage: React.FC = () => {
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
                <div className={pageStyle.content}>
                    <EventsComponent pageTag={PAGE_TAG} />
                </div>
            </section>
        </>
    );
};
