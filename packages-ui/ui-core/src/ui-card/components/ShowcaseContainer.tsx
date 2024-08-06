import React from 'react';
import { useAtom } from 'jotai';
import { resourceGalleryAtomRW } from '../../context';
import ShowcaseBranch from './ShowcaseBranch';

const ShowcaseContainer: React.FC = () => {
    const [resourceGalleryRoot] = useAtom(resourceGalleryAtomRW);

    return (
        <div
            className={`
        bg-primary
        grid 
        sm:grid-cols-3 
        gap-4 
        sm:gap-6 
        mt-4 
        sm:mt-8
        `}
        >
            {Object.keys(resourceGalleryRoot).map((branch) => (
                <ShowcaseBranch resourceGalleryBranch={resourceGalleryRoot[branch]} key={branch} />
            ))}
        </div>
    );
};

export default ShowcaseContainer;
