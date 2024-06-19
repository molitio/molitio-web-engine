import React from 'react';
import { NavBar, NavRootProvider } from '@molitio/ui-core';
import { ApplicationContextRoot } from '../context';

const App: React.FC = () => {
    const appName = ApplicationContextRoot['appName'];
    const navRoot = ApplicationContextRoot['navRoot'];

    // ui server-t osszal kerlek
    // meg console read write-ot

    return (
        <div className="navbar bg-base-100 fixed top-0 flex-1 w-full grid grid-cols-2 px-4">
            <NavRootProvider navRoot={navRoot}>
                <div className="flex items-center">
                    <span className="text-xl font-bold text-gray-800">{appName}</span>
                </div>
                <div className="flex justify-end">
                    <NavBar />
                </div>
            </NavRootProvider>
        </div>
    );
};

export default App;
