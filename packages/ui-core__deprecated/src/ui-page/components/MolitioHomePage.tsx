import React from 'react';
import { SegmentParams } from '../../ui-common';
import MolitioHeroSegment from '../../ui-common/components/MolitioHeroSegment';

export type MolitioHomePageProps = {
    segmentParams?: Record<string, SegmentParams>;
};

const MolitioHomePage: React.FC<MolitioHomePageProps & React.PropsWithChildren> = (props) => {
    const { segmentParams, children } = props;

    const heroSegmentParams = segmentParams?.hero ?? { pageName: 'Molitio Home Page' };

    return <MolitioHeroSegment segmentParams={heroSegmentParams}>{children}</MolitioHeroSegment>;
};

export default MolitioHomePage;
