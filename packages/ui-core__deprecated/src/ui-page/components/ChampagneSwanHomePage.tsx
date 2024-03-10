import React from 'react';
import { MolitioHeroSegment, SegmentParams } from '../../ui-common';

type ChampagneSwanHomePageProps = {
    segmentParams?: Record<string, SegmentParams>;
};

const ChampagneSwanHomePage: React.FC<ChampagneSwanHomePageProps> = (props) => {
    const { segmentParams } = props;

    const heroSegmentParams = segmentParams?.hero ?? { pageName: 'home' };

    return <MolitioHeroSegment segmentParams={heroSegmentParams} />;
};

export default ChampagneSwanHomePage;
