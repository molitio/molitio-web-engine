export const ApplicationTheme = {
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                'html, body': {
                    backgroundColor: '#FAFAFA',
                    boxSizing: 'border-box',
                    height: '100%',
                    margin: 0,
                    padding: 0,
                },
                '*': {
                    boxSizing: 'inherit',
                },
                '*::before, *::after': {
                    boxSizing: 'inherit',
                },
                '#__next': {
                    height: '100%',
                    position: 'relative',
                },
            },
        },
    },
    breakpoints: {
        keys: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
        values: {
            xs: 0,
            sm: 576, // Extra small devices (e.g., phones) - screens up to 576px
            md: 768, // Small devices (e.g., tablets) - screens between 576px and 768px
            lg: 992, // Medium devices (e.g., laptops) - screens between 768px and 992px
            xl: 1200, // Large devices (e.g., desktops) - screens between 992px and 1200px
            xxl: 1400, // Extra large devices - screens above 1400px
        },
        unit: 'px',
    },
    palette: {
        primary: {
            main: '#6C9AC3',
            light: '',
            dark: '',
            contrastText: '#FAFAFA',
        },
        secondary: {
            main: '#D0D7DC',
            light: '',
            dark: '',
            contrastText: '#FAFAFA',
        },
        tertiary: {
            main: '#FAFAFA',
            light: '',
            dark: '',
            contrastText: '#FAFAFA',
        },
        background: {
            default: '#c6dde2ff',
            secondary: '#0c7b93ff',
            interactive: '#c1a87dff',
        },
        text: {
            main: '#333333',
            inverse: '#FAFAFA ',
            interactive: '#c1a87dff',
            disabled: '',
        },
        gradient: {
            default: 'rgba(229, 236, 238, 0) 0%, rgba(153, 198, 208, 0.4) 40%, rgba(198, 221, 226, 1) 80%',
        },
        visual: {
            default: { textShadow: '2px 2px 4px #c6dde2ff' },
        },
    },
    dimensions: {
        page: {
            height: '1150px',
        },
        header: {
            height: '5em',
        },
        footer: {
            height: '4.2em',
        },
    },
};
