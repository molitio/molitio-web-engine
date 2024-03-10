import React from 'react';
import { useTheme } from 'styled-components';
import { AppContext, SystemContentLeaf, SystemContentRoot, SystemNavRoot } from '../types';
import SystemContext from './SystemContext';

type SystemContextProviderProps = {
    externalTheme?: any;
};

const SystemContextProvider: React.FC<
    AppContext<SystemNavRoot, SystemContentRoot<SystemContentLeaf>> &
        SystemContextProviderProps &
        React.PropsWithChildren
> = (props) => {
    const { children, navRoot, appName, interactive, contentRoot } = props;

    const [extendNavBar, setExtendNavBar] = React.useState(false);

    const theme = useTheme();

    return (
        <SystemContext.Provider
            value={{
                appName: appName,
                interactive: {
                    navBar: {
                        isExpanded: extendNavBar,
                        toggleExpanded: setExtendNavBar,
                    },
                    ...interactive,
                },
                theme: theme,
                navRoot: navRoot,
                contentRoot: contentRoot,
            }}
        >
            {children}
        </SystemContext.Provider>
    );
};

export default SystemContextProvider;
