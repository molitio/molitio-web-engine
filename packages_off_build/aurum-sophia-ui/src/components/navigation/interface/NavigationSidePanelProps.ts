export interface Panel {
    sidePanel: boolean;
}

interface NavigationSidePanelProps {
    navigationState: Panel;
    toggle: {
        (): void;
    };
}

export default NavigationSidePanelProps;
