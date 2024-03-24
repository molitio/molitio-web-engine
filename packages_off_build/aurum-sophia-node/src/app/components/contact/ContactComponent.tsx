import { Card, CardContent, CardMedia, Link, Typography } from '@material-ui/core';
import React from 'react';
import { treeShape } from '../assets/images';
import { AppContext, SiteDefaultContactPageContent } from '../../services/siteDefaultsService';
import { createSiteStyle } from '../../styles/siteStyleBuilder';
import { PageTagProps } from '../common/interface/PageTagProps';
import { TContactInfo } from '../common/type/TContactInfo';
import { PhoneContactComponent } from './PhoneContactComponent';

export const ContactComponent: React.FC<PageTagProps> = ({ pageTag }: PageTagProps) => {
    const context = React.useContext(AppContext);
    const theme = context.selectedTheme;

    const [contactContent, setContactContent] = React.useState(SiteDefaultContactPageContent);

    React.useEffect(() => {
        const content = context.contentCollection?.get(pageTag) ?? SiteDefaultContactPageContent;
        setContactContent(content);
    }, [context.contentCollection, pageTag]);

    const preventDefault = (event: React.SyntheticEvent) => event.preventDefault();

    const componentStyle = createSiteStyle({
        root: {
            color: theme.palette.text.primary,
            margin: '10px',
            border: 0,
            borderStyle: 'solid',
            borderColor: theme.palette.secondary.main,
            boxShadow: theme.shadows[5],
            opacity: 0.9,
            [theme.breakpoints.down('xs')]: {},
            borderRadius: 20,
            /*...theme.themeGradient,*/
        },
        contentContainer: {
            display: 'flex',
            flexDirection: 'row',
        },
        card: {
            borderRadius: 20,
            backgroundColor: 'transparent',
        },
        cardMedia: {
            flex: 1,
            margin: '5px',
            '& img': {
                borderRadius: '50%',
                border: 1,
                borderStyle: 'solid',
                borderColor: theme.palette.primary.main,
            },
        },
        cardContent: {
            flex: 4,
            textShadow: `1px 1px ${theme.palette.secondary.main}`,
        },
        cardInfo: {
            color: theme.palette.text.primary,
        },
        cardButton: {
            color: theme.palette.text.primary,
        },
    });

    return (
        <div className={componentStyle.root}>
            <Card className={componentStyle.card}>
                <div className={componentStyle.contentContainer}>
                    <div className={componentStyle.cardMedia}>
                        <CardMedia component="img" alt={contactContent.title} image={treeShape} title={contactContent.title} />
                    </div>
                    <div className={componentStyle.cardContent}>
                        <CardContent>
                            <Typography gutterBottom variant="h6">
                                {contactContent.title}
                            </Typography>
                            <Typography variant="subtitle1">{`Telefonos elérhetőségeink:`}</Typography>
                            {Array.from([...(contactContent.contacts ?? new Map<string, TContactInfo>())]).map((contact) => (
                                <div key={contact[0]}>
                                    <PhoneContactComponent key={contact[0]} contact={contact[1]} />
                                    <br />
                                </div>
                            ))}
                            <Typography variant="body2" className={componentStyle.cardInfo}>
                                {`Email címünk: `}
                                <Link href={`mailto:${contactContent.recruitFormUrl}`} onClick={preventDefault}>
                                    {`${contactContent.siteContact?.emailAddress}`}
                                </Link>
                            </Typography>

                            <Typography variant="body2" className={componentStyle.cardInfo}>
                                <Link href={contactContent.recruitFormUrl} onClick={preventDefault}>
                                    {`Csatlakozás az alapítványhoz`}
                                </Link>
                            </Typography>
                            <Typography variant="body2" className={componentStyle.cardInfo}>
                                {`Székhely és levelezési cím: ${contactContent.siteContact?.address}`}
                            </Typography>
                        </CardContent>
                    </div>
                </div>
            </Card>
        </div>
    );
};
