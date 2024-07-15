import React from 'react';
import GalleryTool from './components/GalleryTool';
import './App.css';

const App: React.FC = () => {
    return (
        <div className="App">
            <GalleryTool />
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
