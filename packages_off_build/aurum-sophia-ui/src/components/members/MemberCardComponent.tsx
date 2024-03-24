import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@material-ui/core';
import React from 'react';
import { AppContext } from '../../services/siteDefaultsService';
import { createSiteStyle } from '../../styles/siteStyleBuilder';
import { TContentParagraph } from '../common/type/TContentParagraph';
import { ContentCardComponentProps } from '../common/interface/ContentCardComponentProps';
import { MemberContactCardComponent } from './MemberContactCardComponent';

export const MemberCardComponent: React.FC<ContentCardComponentProps> = ({
    content,
    isExpanded,
    setIsExpanded,
    setExpandedContent,
}: ContentCardComponentProps) => {
    const context = React.useContext(AppContext);
    const theme = context.selectedTheme;

    const componentStyle = createSiteStyle({
        card: {
            color: theme.palette.text.primary,
            [theme.breakpoints.up('md')]: {},
            [theme.breakpoints.down('md')]: {},
            margin: '10px',
            border: 0,
            borderStyle: 'solid',
            borderColor: theme.palette.secondary.main,
            boxShadow: theme.shadows[5],
            opacity: 0.9,
            backgroundColor: 'transparent',
            borderRadius: 20,
            display: 'flex',
            alignItems: 'stretch',
            /*...theme.themeGradient,*/
        },
        contentContainer: {
            display: 'flex',
            alignSelf: 'flex-start',
            flexDirection: isExpanded ? 'row' : 'column',
        },
        cardMedia: {
            flex: 1,
            margin: '5px',
            '& img': {
                borderRadius: '50%',
                /*                 [theme.breakpoints.down('xs')]: {
                    height: '150px',
                    width: '150px',
                },
                [theme.breakpoints.up('sm')]: {
                    height: '300px',
                    width: '300px',
                },
                [theme.breakpoints.up('lg')]: {},
                [theme.breakpoints.up('xl')]: {}, */

                border: 1,
                borderStyle: 'solid',
                borderColor: theme.palette.primary.main,
            },
            '& img:hover': {
                boxShadow: `1px 1px ${theme.palette.primary.main}`,
            },
        },
        cardContent: {
            textShadow: `1px 1px ${theme.palette.secondary.main}`,
        },
        cardInfo: {
            color: theme.palette.text.secondary,
        },
        cardButton: {
            display: 'flex',
        },
        memberMotto: {
            overflowWrap: 'break-word',
        },
        cardGutter: {
            flex: 1,
        },
    });

    const handleExpand = () => {
        setIsExpanded(!isExpanded);
        setExpandedContent(content);
    };

    return (
        <Card className={componentStyle.card}>
            <CardActionArea className={componentStyle.cardButton}>
                <div className={componentStyle.contentContainer} onClick={() => handleExpand()}>
                    <div className={componentStyle.cardMedia}>
                        <CardMedia
                            component="img"
                            alt="Member Image"
                            src={content[1].memberProfilePicture}
                            title={content[1].memberName}
                        />
                    </div>

                    <div className={componentStyle.cardContent}>
                        <CardContent>
                            <Typography gutterBottom variant="h6">
                                {content[1].memberName}
                            </Typography>
                            <Typography gutterBottom variant="subtitle1">
                                {content[1].memberTitle}
                            </Typography>
                            {content[1].memberMotto && (
                                <Typography
                                    className={componentStyle.memberMotto}
                                    variant="body2"
                                >{`"${content[1].memberMotto}"`}</Typography>
                            )}

                            {isExpanded &&
                                Array.from([
                                    ...(content[1].memberBioSections ?? new Map<string, TContentParagraph>()),
                                ]).map((paragrah) => (
                                    <Typography
                                        key={paragrah[0]}
                                        variant="body2"
                                        className={componentStyle.cardContent}
                                    >
                                        {paragrah[1].textSection}
                                        <br />
                                        <br />
                                    </Typography>
                                ))}
                            {isExpanded && <MemberContactCardComponent memberContact={content[1].memberContact} />}
                        </CardContent>
                        <div className={componentStyle.cardGutter}></div>
                    </div>
                </div>
            </CardActionArea>
        </Card>
    );
};
