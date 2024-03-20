import React from 'react';
import { Card, CardActionArea, CardMedia, CardContent, Typography, CardActions, Button } from '@material-ui/core';
import greenHand from 'assets/images/greenHand.jpg';
import { AppContext } from 'services/siteDefaultsService';
import { createSiteStyle } from 'styles/siteStyleBuilder';
import { TContentParagraph } from 'components/common/type/TContentParagraph';
import { ContentCardComponentProps } from 'components/common/interface/ContentCardComponentProps';

export const EventCardComponent: React.FC<ContentCardComponentProps> = ({
    content,
    isExpanded,
    setIsExpanded,
    setExpandedContent,
}: ContentCardComponentProps) => {
    const context = React.useContext(AppContext);
    const theme = context.selectedTheme;

    const componentStyle = createSiteStyle({
        content: {
            [theme.breakpoints.between('lg', 'xl')]: {
                border: '3px solid purple',
            },
            [theme.breakpoints.between('md', 'lg')]: {
                border: '3px solid blue',
            },
            [theme.breakpoints.between('sm', 'md')]: {
                border: '3px solid green',
                flex: isExpanded ? '1 1 80vw' : '1 1 30vw',
            },
            [theme.breakpoints.between('xs', 'sm')]: {
                border: '3px solid yellow',
                flex: isExpanded ? '1 1 80vw' : '1 1 20vw',
            },
            color: theme.palette.text.primary,
            margin: '10px',
            border: 0,
            borderStyle: 'solid',
            borderColor: theme.palette.secondary.main,
            boxShadow: theme.shadows[5],
            opacity: 0.9,
            [theme.breakpoints.down('xs')]: {},
            backgroundColor: 'transparent',
            borderRadius: 20,
            /*...theme.themeGradient,*/
        },
        contentContainer: {
            display: 'flex',
            flexDirection: 'column',
        },
        card: {
            borderRadius: 20,
            backgroundColor: 'transparent',
        },
        cardMedia: {
            flex: 3,
            margin: '5px',
            '& img': {
                border: 1,
                height: '15vh',
                borderRadius: '20px',
                borderStyle: 'solid',
                borderColor: theme.palette.primary.main,
            },
            '& img:hover': {
                boxShadow: `1px 1px ${theme.palette.primary.main}`,
            },
        },
        cardContent: {
            flex: 6,
            textShadow: `1px 1px ${theme.palette.secondary.main}`,
        },
        cardInfo: {
            color: theme.palette.text.secondary,
        },
        cardButton: {
            color: theme.palette.text.primary,
        },
    });

    const handleExpand = () => {
        setIsExpanded(!isExpanded);
        setExpandedContent(content);
    };

    return (
        <div className={componentStyle.content}>
            <Card className={componentStyle.card}>
                <CardActionArea>
                    <div className={componentStyle.contentContainer}>
                        <div className={componentStyle.cardMedia}>
                            <CardMedia component="img" alt="Event Image" image={greenHand} title="Event Image" />
                        </div>
                        <div className={componentStyle.cardContent}>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    {content[1].title}
                                </Typography>
                                <Typography variant="subtitle1" component="p">
                                    {content[1].eventSummary}
                                </Typography>
                                {isExpanded &&
                                    Array.from([...(content[1].eventContentSections ?? new Map<string, TContentParagraph>())]).map((content) => (
                                        <Typography key={content[0]} variant="body2" className={componentStyle.cardInfo}>
                                            {content[1].textSection}
                                        </Typography>
                                    ))}
                            </CardContent>
                        </div>
                    </div>
                </CardActionArea>
                <CardActions>
                    <Button size="small" className={componentStyle.cardButton} onClick={() => handleExpand()}>
                        Bövebben...
                    </Button>
                </CardActions>
            </Card>
        </div>
    );
};
