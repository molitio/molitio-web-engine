import React from 'react';
import { ResourceGalleryRoot, ShowcaseContainer, initResourceGalleryStore } from '@molitio/mwe-ui-core';
import { NavBar, NavRootProvider } from '@molitio/mwe-ui-core';
import { ApplicationContextRoot } from '../context';
import './App.css';
import { Provider } from 'jotai';

const App: React.FC<React.PropsWithChildren> = (props) => {
    const resourceGalleryData: ResourceGalleryRoot = ApplicationContextRoot.resourceGalleryRoot ?? {};

    const store = initResourceGalleryStore(resourceGalleryData);

    return (
        <div className="App bg-black text-white">
            <NavRootProvider navRoot={ApplicationContextRoot.navRoot}>
                <NavBar />
            </NavRootProvider>
            <Provider store={store}>{props.children}</Provider>
        </div>
    );
};

export default App;

/*<NavRootProvider navRoot={navRoot}>
                    <div className="flex items-center">
                        <span className="text-xl text-black">{appName}</span>
                    </div>         
                </NavRootProvider> */
