import React from 'react';
import { Typography } from '@material-ui/core';
import { AppContext, SiteDefaultPageContent } from '../../services/siteDefaultsService';
import { createSiteStyle } from '../../styles/siteStyleBuilder';
import { PageTagProps } from '../common/interface/PageTagProps';
import { TPageContent } from '../common/type/TPageContent';
import membersImage from '../../images/membersImage.jpg';
import { TComponentContent } from '../common/type/TComponentContent';
import { TVideo } from '../common/type/TVideo';
import YouTube from 'react-youtube';

export const AboutComponent: React.FC<PageTagProps> = ({ pageTag }: PageTagProps) => {
    const context = React.useContext(AppContext);
    const theme = context.selectedTheme;

    const videoOptions = {
        height: '390',
        width: '640',
        playerVars: {},
    };

    const [aboutContent, setAboutContent] = React.useState<TPageContent>(SiteDefaultPageContent);
    const [aboutVideoId, setAboutVideoId] = React.useState<TVideo>({ videoId: '' });

    React.useEffect(() => {
        const content = context.contentCollection.get(pageTag) ?? SiteDefaultPageContent;
        setAboutContent(content);

        const youTubeIds = new Map([...Array.from(content?.youTubeIds ?? new Map<string, TVideo>())]);

        setAboutVideoId(youTubeIds.get('about_video') ?? { videoId: '' });
    }, [context.contentCollection, pageTag]);

    const componentStyle = createSiteStyle({
        contentContainer: {
            display: 'flex',
            flexDirection: 'column',
        },
        aboutContent: {
            textAlign: 'center',
            padding: '15px',
            opacity: 1,
            display: 'flex',
            flexWrap: 'nowrap',
            [theme.breakpoints.down('sm')]: {
                flexDirection: 'column',
            },
            textShadow: `1px 1px ${theme.palette.secondary.main}`,
        },
        aboutText: {
            marginRight: '24px',
            marginLeft: '24px',
            flex: 8,
        },
        aboutImageContainer: {
            marginTop: '15px',
            marginLeft: '20px',
            marginRight: '15px',
            flex: 4,
            borderWidth: 0,
            borderRadius: '10px',
            borderStyle: 'solid',
            /* display: 'flex', */
            '& img': {
                borderColor: theme.palette.secondary.main,
                opacity: 0.8,
                flex: 1,
                maxWidth: '420px',
                /*  display: 'block',
                maxWidth: '100%',
                maxHeight: '100%', */
                [theme.breakpoints.down('sm')]: {
                    width: '90vw',
                },
                borderRadius: '20px',
                border: 1,
            },
        },

        aboutVideoContainer: { flex: 1, paddings: '20px', display: 'flex', justifyContent: 'center' },
        aboutVideo: {
            [theme.breakpoints.down('sm')]: {
                width: '90vw',
            },
            flex: 1,
            opacity: 0.9,
        },
    });

    return (
        <div className={componentStyle.contentContainer}>
            <div className={componentStyle.aboutContent}>
                <div className={componentStyle.aboutText}>
                    <Typography variant="h5">
                        <b>{aboutContent?.title}</b>
                    </Typography>
                    <br />
                    <Typography variant="h6">{aboutContent?.textContent}</Typography>
                    <br />
                    {Array.from([...(aboutContent?.componentContent ?? new Map<string, TComponentContent>())]).map(
                        (content) => (
                            <div key={content[0]}>
                                <Typography variant="body1" component="p">
                                    {content[1].textContent}
                                </Typography>
                                <br />
                            </div>
                        ),
                    )}
                </div>
                <div className={componentStyle.aboutImageContainer}>
                    <img src={membersImage} alt="members photo" />
                </div>
            </div>
            <div className={componentStyle.aboutVideoContainer}>
                {aboutVideoId.videoId && (
                    <YouTube className={componentStyle.aboutVideo} videoId={aboutVideoId.videoId} opts={videoOptions} />
                )}
            </div>
        </div>
    );
};
