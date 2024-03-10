import React, { HTMLAttributes } from 'react';
import { ComponentCollectionTags } from '../../ui-style-service';
import { StyledComponentGroup } from '../styles';

type ComponentGroupProps = {
    groupingType?: ComponentCollectionTags;
};

const ComponentGroup: React.FC<ComponentGroupProps & HTMLAttributes<HTMLDivElement>> = (props) => {
    const { children, groupingType } = props;

    return <StyledComponentGroup groupingType={groupingType}>{children}</StyledComponentGroup>;
};

export default ComponentGroup;
