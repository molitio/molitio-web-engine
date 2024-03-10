import React from 'react';
import { PageBackground } from '../styles';
import { PageSection } from '../types';

type MultiColumnPageProps = {
    pageSections: PageSection[];
};

const MultiColumnPage: React.FC<MultiColumnPageProps & React.PropsWithChildren> = (props) => {
    const { pageSections } = props;

    return (
        <PageBackground>
            {pageSections.map((section, index) => (
                <div key={index}>{section.element}</div>
            ))}
        </PageBackground>
    );
};

export default MultiColumnPage;
