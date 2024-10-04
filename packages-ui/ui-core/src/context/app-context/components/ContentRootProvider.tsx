'use client';
import React, { useMemo } from 'react';
import { Provider } from 'jotai';
import { ContentRoot } from '../types';
import { initContentRootStore } from '../ContentRootStore';

export type ContentRootProviderProps = React.PropsWithChildren & {
    contentRoot?: ContentRoot;
};

const ContentRootProvider: React.FC<ContentRootProviderProps> = (props) => {
    const { children, contentRoot } = props;

    const store = useMemo(() => initContentRootStore(contentRoot ?? {}), [contentRoot]);

    return <Provider store={store}>{children}</Provider>;
};

export default ContentRootProvider;
