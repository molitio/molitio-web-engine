import React from 'react';
import './style/global.css';
import { NavBar, NavBarType } from '@molitio/ui-core';

const App: React.FC = () => {
    return (
        <div className="text-5xl">
            <NavBar type={NavBarType.Default} logo={<div>logo</div>} />
            hello world
        </div>
    );
};

export default App;
