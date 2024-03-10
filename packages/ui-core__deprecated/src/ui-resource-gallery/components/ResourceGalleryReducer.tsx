import { Gallery } from '../../ui-common';
import { ResourceGalleryActionType } from '../types';

export type ResourceGalleryState = {
    focusedImageTag?: string;
    selectedCategoryTag?: string;
    gallery?: Gallery;
};

export type ResourceGalleryAction = {
    type: ResourceGalleryActionType;
    payload?: ResourceGalleryState;
};

const ResourceGalleryReducer = (state: ResourceGalleryState, action: ResourceGalleryAction) => {
    const { type, payload } = action;
    switch (type) {
        case ResourceGalleryActionType.SELECT_CATEGORY:
            return {
                ...state,
                selectedCategoryTag: payload?.selectedCategoryTag,
            };
        default:
            return {
                ...state,
            };
    }
};

export default ResourceGalleryReducer;
