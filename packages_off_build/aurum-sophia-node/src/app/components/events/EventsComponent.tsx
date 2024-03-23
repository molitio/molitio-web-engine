import { Typography } from '@material-ui/core';
import React from 'react';
import { AppContext, SiteDefaultPageContent } from '../../services/siteDefaultsService';
import { createSiteStyle } from '../../styles/siteStyleBuilder';
import { PageTagProps } from '../common/interface/PageTagProps';
import { TEvent } from '../common/type/TEvent';
import { EventCardComponent } from './EventCardComponent';

export const EventsComponent: React.FC<PageTagProps> = ({ pageTag }: PageTagProps) => {
    const context = React.useContext(AppContext);
    const theme = context.selectedTheme;

    const [isExpanded, setIsExpanded] = React.useState(false);
    const [expandedContent, setExpandedContent] = React.useState<[string, TEvent]>(['', {}]);

    const [eventsContent, setEventsContent] = React.useState(SiteDefaultPageContent);
    const [events, setEvents] = React.useState(new Map<string, TEvent>());

    React.useEffect(() => {
        const content = context.contentCollection?.get(pageTag) ?? SiteDefaultPageContent;
        setEventsContent(content);
        const events = content?.componentContent ?? new Map<string, TEvent>();
        console.log(events);
        setEvents(events);
    }, [context.contentCollection, pageTag]);

    const componentStyle = createSiteStyle({
        events: {},
        componentTitle: {
            textAlign: 'center',
            padding: '15px',
            opacity: 1,
            flex: 3,
            textShadow: `1px 1px ${theme.palette.secondary.main}`,
        },
        eventsContainer: {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'stretch',
            flexWrap: 'wrap',
            paddingLeft: '5vw',
            paddingRight: '5vw',
            [theme.breakpoints.down('md')]: {},
            [theme.breakpoints.down('xs')]: {},
            [theme.breakpoints.between('lg', 'xl')]: {
                border: '3px solid purple',
            },
            [theme.breakpoints.between('md', 'lg')]: {
                border: '3px solid purple',
            },
            [theme.breakpoints.between('sm', 'md')]: {
                border: '3px solid green',
                flexDirection: 'column',
                flex: isExpanded ? '1 1 80vw' : '1 1 30vw',
            },
            [theme.breakpoints.between('xs', 'sm')]: {
                border: '3px solid yellow',
                flex: isExpanded ? '1 1 80vw' : '1 1 20vw',
            },
        },
    });

    return (
        <div className={componentStyle.events}>
            <div className={componentStyle.componentTitle}>
                <Typography variant="h5">{eventsContent.title}</Typography>
            </div>
            <br />
            {isExpanded ? (
                <div className={componentStyle.eventsContainer}>
                    <EventCardComponent
                        content={expandedContent}
                        isExpanded={isExpanded}
                        setIsExpanded={setIsExpanded}
                        setExpandedContent={setExpandedContent}
                    />
                </div>
            ) : (
                <div className={componentStyle.eventsContainer}>
                    {Array.from([...events]).map((event) => (
                        <EventCardComponent
                            key={event[0]}
                            content={event}
                            isExpanded={isExpanded}
                            setIsExpanded={setIsExpanded}
                            setExpandedContent={setExpandedContent}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};
