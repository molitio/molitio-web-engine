import React from 'react';
import { NavBar, NavRootProvider } from '@molitio/ui-core';
import { ApplicationContextRoot } from '../context';
import './style/global.css';

const App: React.FC = () => {
    const { navRoot } = ApplicationContextRoot;
    console.log(navRoot, 'navRoot');
    return (
        <div className="text-5xl">
            <NavRootProvider>
                <NavBar appNavRoot={navRoot} logo={<div>logo</div>} />
            </NavRootProvider>
            hello world
        </div>
    );
};

export default App;
