export type AppContextInteractive = {
    interactive: {
        navBarExpanded?: boolean;
        setNavBarExpanded: React.Dispatch<React.SetStateAction<boolean>> | undefined;
    };
};
