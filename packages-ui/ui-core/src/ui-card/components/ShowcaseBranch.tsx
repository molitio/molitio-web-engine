import React from 'react';
import { ResourceGalleryBranch } from '../../context';
import ShowcaseItem from './ShowcaseItem';

export type ShowcaseBranchProps = {
    resourceGalleryBranch: ResourceGalleryBranch;
};

const ShowcaseBranch: React.FC<ShowcaseBranchProps> = (props) => {
    const { resourceGalleryBranch } = props;
    return (
        <div className="flex flex-col">
            <h1>{resourceGalleryBranch.name}</h1>
            {Object.keys(resourceGalleryBranch.leafs ?? {}).map((resourceLeaf, i) => (
                <ShowcaseItem
                    key={i}
                    title={resourceGalleryBranch.leafs?.[resourceLeaf].title ?? ''}
                    subtitle={resourceGalleryBranch.leafs?.[resourceLeaf].subTitle ?? ''}
                />
            ))}
            {resourceGalleryBranch.branches ? (
                <>
                    <span>{'sub categories'}</span>
                    {Object.keys(resourceGalleryBranch.branches ?? {}).map((resourceBranch, i) => (
                        <ShowcaseBranch
                            key={i}
                            resourceGalleryBranch={resourceGalleryBranch.branches?.[resourceBranch] ?? {}}
                        />
                    ))}
                </>
            ) : (
                <></>
            )}
        </div>
    );
};

export default ShowcaseBranch;
