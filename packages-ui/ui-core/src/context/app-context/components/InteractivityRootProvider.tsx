'use client';

import React, { useMemo } from 'react';
import { Provider } from 'jotai';
import { ContentRoot, initContentRootStore } from '..';

export type InteractivityRootProviderProps = React.PropsWithChildren & {
    contentRoot?: ContentRoot;
};

const InteractivityRootProvider: React.FC<InteractivityRootProviderProps> = (props) => {
    const { children, contentRoot } = props;

    const store = useMemo(() => initContentRootStore(contentRoot ?? {}), [ contentRoot]);

    return <Provider store={store}>{children}</Provider>;
};

export default InteractivityRootProvider;