import React from 'react';
import CardBox from '../../ui-common/components/CardBox';
import { StyledServicesPage } from '../styles';
import { CardContent } from '../../ui-common/types';
import { SystemContext } from '../../ui-common/context';

type ServicesProps = {
    externalTitle?: string;
    externalCardContentCollection?: CardContent[];
};

const ServicesPage: React.FC<ServicesProps> = (props) => {
    const { externalTitle, externalCardContentCollection = [] } = props;
    const systemContext = React.useContext(SystemContext);
    const servicesLeaf = systemContext?.contentRoot?.services?.leafs;
    const textContent = servicesLeaf?.contentCards?.textContent;
    const contentCards = servicesLeaf?.contentCards;

    return (
        <StyledServicesPage>
            <CardBox
                externalTitle={externalTitle ? externalTitle : textContent?.title}
                externalCardContent={
                    externalCardContentCollection.length > 0
                        ? externalCardContentCollection
                        : contentCards?.cardContentCollection ?? []
                }
            />
        </StyledServicesPage>
    );
};

export default ServicesPage;
