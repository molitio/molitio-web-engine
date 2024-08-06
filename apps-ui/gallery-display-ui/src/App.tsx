import React from 'react';
import { ResourceGalleryRoot, ShowcaseContainer, initResourceGalleryStore } from '@molitio/ui-core';

import { ApplicationContextRoot } from '../context';
import './App.css';
import { Provider } from 'jotai';

const App: React.FC = () => {
    const resourceGalleryData: ResourceGalleryRoot = ApplicationContextRoot.resourceGalleryRoot;

    const store = initResourceGalleryStore(resourceGalleryData);

    return (
        <div className="App">
            <h1>hi hello</h1>
            <Provider store={store}>
                <ShowcaseContainer />
            </Provider>
        </div>
    );
};

export default App;

{
    /*<NavRootProvider navRoot={navRoot}>
                    <div className="flex items-center">
                        <span className="text-xl text-black">{appName}</span>
                    </div>         
                </NavRootProvider> */
}
