import React from 'react';
import { ShowcaseData, ShowcaseContainer } from '@molitio/ui-core';

import { ApplicationContextRoot } from '../context';
import './App.css';

const App: React.FC = () => {
    const ShowcaseData: ShowcaseData[] = ApplicationContextRoot.contentRoot['home'].leafs['showcaseCards'].cardContent;
    return (
        <div className="App">
           <ShowcaseContainer cards={ShowcaseData} /> 
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
