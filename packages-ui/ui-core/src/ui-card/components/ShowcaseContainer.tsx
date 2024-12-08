import React from 'react';
import { useAtom } from 'jotai';
import { resourceGalleryAtomRW } from '../../context';
import ShowcaseBranch from './ShowcaseBranch';

const ShowcaseContainer: React.FC = () => {
    const [resourceGalleryRoot] = useAtom(resourceGalleryAtomRW);

    return (
        <div className="flex flex-col">
            {Object.keys(resourceGalleryRoot).map((branch) => (
                <ShowcaseBranch resourceGalleryBranch={resourceGalleryRoot[branch]} key={branch} />
            ))}
        </div>
    );
};

export default ShowcaseContainer;
