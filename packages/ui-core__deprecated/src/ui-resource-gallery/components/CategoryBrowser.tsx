import React from 'react';
import { Category } from '../../ui-common';
import { StyledCategoryImage, StyledResourceContainer } from '../styles';
import { ResourceGalleryActionType } from '../types';
import ResourceGalleryReducer from './ResourceGalleryReducer';

type CategoryBrowserProps = {
    categories?: Record<string, Category>;
};

const CategoryBrowser: React.FC<CategoryBrowserProps> = (props) => {
    const { categories = {} } = props;

    const [resourceGalleryState, dispatch] = React.useReducer(ResourceGalleryReducer, {});
    return (
        <section>
            {Object.entries(categories).map((category) => (
                <div
                    key={category[0]}
                    onClick={() =>
                        dispatch({
                            type: ResourceGalleryActionType.SELECT_CATEGORY,
                            payload: { ...resourceGalleryState, selectedCategoryTag: category[0] },
                        })
                    }
                >
                    <h2>{category[1].categoryName}</h2>

                    {Object.entries(category[1].resources).map((resource) => (
                        <StyledResourceContainer key={resource[0]}>
                            <h2>{resource[1].imageTag}</h2>
                            <br />
                            <a href={resource[1].resourceId}>
                                <StyledCategoryImage src={resource[1].imageUrl} alt={resource[0]} />
                            </a>
                            <br />
                        </StyledResourceContainer>
                    ))}

                    <br />
                </div>
            ))}
        </section>
    );
};

export default CategoryBrowser;
