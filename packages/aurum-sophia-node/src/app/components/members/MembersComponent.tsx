import React from 'react';
import { MemberCardComponent } from './MemberCardComponent';
import { AppContext, SiteDefaultPageContent } from '../../services/siteDefaultsService';
import { PageTagProps } from '../common/interface/PageTagProps';
import { createSiteStyle } from '../../styles/siteStyleBuilder';
import { TPageContent } from '../common/type/TPageContent';
import { TMember } from '../common/type/TMember';
import { Typography } from '@material-ui/core';

export const MembersComponent: React.FC<PageTagProps> = ({ pageTag }: PageTagProps) => {
    const context = React.useContext(AppContext);
    const theme = context.selectedTheme;

    /*     const focusedContentRef = React.useRef<HTMLInputElement>();
    const scrollToContent = () => focusedContentRef.current.scrollIntoView(); */

    const [isExpanded, setIsExpanded] = React.useState(false);
    const [expandedContent, setExpandedContent] = React.useState<[string, TMember]>(['', {}]);

    const [membersContent, setMembersContent] = React.useState<TPageContent>(SiteDefaultPageContent);
    const [members, setMembers] = React.useState(new Map<string, TMember>());

    React.useEffect(() => {
        const content = context.contentCollection.get(pageTag) ?? SiteDefaultPageContent;
        setMembersContent(content);
        setMembers(content.componentContent ?? new Map<string, TMember>());
    }, [context.contentCollection, pageTag]);

    const componentStyle = createSiteStyle({
        members: {},
        componentTitle: {
            textAlign: 'center',
            padding: '15px',
            opacity: 1,
            flex: 3,
            textShadow: `1px 1px ${theme.palette.secondary.main}`,
        },
        membersContainer: {
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'center',
            paddingLeft: '5vw',
            paddingRight: '5vw',
            [theme.breakpoints.down('md')]: {},
            [theme.breakpoints.down('xs')]: {},
        },
    });

    return (
        <div className={componentStyle.members}>
            <div className={componentStyle.componentTitle}>
                <Typography variant="h5">
                    <b>{membersContent.title}</b>
                </Typography>
            </div>
            <br />
            {isExpanded ? (
                <MemberCardComponent
                    content={expandedContent}
                    isExpanded={isExpanded}
                    setIsExpanded={setIsExpanded}
                    setExpandedContent={setExpandedContent}
                />
            ) : (
                <div className={componentStyle.membersContainer}>
                    {Array.from([...members]).map((member, i) => (
                        <MemberCardComponent
                            key={member[0]}
                            content={member}
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
