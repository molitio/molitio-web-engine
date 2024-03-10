import React from 'react';
import { AppContext, SystemContentLeaf, SystemNavRoot, SystemContentRoot } from '../types';

const SystemContext = React.createContext<AppContext<SystemNavRoot, SystemContentRoot<SystemContentLeaf>>>({
    appName: '',
    interactive: { navBar: { isExpanded: false, toggleExpanded: undefined } },
    theme: undefined,
    navRoot: {
        home: {
            label: 'Home',
            path: '/',
        },
    },
});

export default SystemContext;
