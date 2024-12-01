export const ApplicationTheme = {
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
            main: '#0C7B93ff',
            light: '',
            dark: '',
            contrastText: '',
        },
        secondary: {
            main: '#c1dadfff',
            light: '',
            dark: '',
            contrastText: '',
        },
        tertiary: {
            main: '#c1a87dff',
            light: '',
            dark: '',
            contrastText: '',
        },
        background: {
            default: '#c6dde2ff',
            secondary: '#0c7b93ff',
            interactive: '#c1a87dff',
        },
        text: {
            primary: '#0C7B93ff',
            secondary: '#E6FAFFff',
            /* TODO: select tone for default white hue */
            /* tertiary: "#fff", */
            tertiary: '#6C5741ff',
            interactive: '#c1a87dff',
            disabled: '',
        },
        stars: {
            gold: '#bda982ff',
            blue: '#0c7b93ff',
            /* white: "#ffffff", */
            white: '#E6FAFFff',
        },
        gradient: {
            appCoverBottom: 'rgba(229, 236, 238, 0) 0%, rgba(153, 198, 208, 0.4) 40%, rgba(198, 221, 226, 1) 80%',
            appCoverTop: 'rgba(255,255,255, 0) 0%, rgba(247, 255, 255, 0.2) 60%, rgba(198, 221, 226, 1) 90%',
            cover: 'rgba(229, 236, 238, 0) 0%, rgba(153, 198, 208, 0.5) 42%, rgba(198, 221, 226, 1) 100%',
            partial: 'rgba(255,255,255, 0) 0%, rgba(247, 255, 255, 0.2) 20%, rgba(198, 221, 226, 1) 100%',
            reversePartial: 'rgba(255,255,255, 1) 10%, rgba(247, 255, 255, 0.6) 20%, rgba(198, 221, 226, 0) 100%',
            contactCoverTop: 'rgba(229, 236, 238, 0.9) 0%,  24%, rgba(198, 221, 226, 0) 68%',
            contactCoverBottom:
                'rgba(255,255,255, 1) 10%, rgba(198, 221, 226, 0.6), 60%, rgba(229, 236, 238, 0.0) 100%',
            /* "rgba(198, 221, 226, 1) 0%, rgba(198, 221, 226, 0.6), 36%, rgba(229, 236, 238, 0.0) 100%", */
            landingServicesContent:
                'rgba(198, 221, 226, 1) 0%, rgba(198, 221, 226, 0.6), 36%, rgba(229, 236, 238, 0.0) 100%',
        },

        visual: {
            navBarMenuTextShadow: { textShadow: '2px 2px 4px #c6dde2ff' },
            appCoverTitleShadow: { textShadow: '2px 2px 4px #424E51ff' },
            appCoverTextShadow: { textShadow: '2px 2px 2px #424E51ff' },
            brandMessageTitleShadow: { textShadow: '2px 2px 4px #C1DFE6ff' },
            brandMessageContentTitleShadow: { textShadow: '1px 1px 2px #C1DFE6ff' },
            brandMessageContentTextShadow: { textShadow: '1px 1px 2px #C1DFE6ff' },
            brandMessageImageShadow: { boxShadow: '0px 3px 3px 0px #424E51ff' },
            aboutContentTitleShadow: { textShadow: '2px 2px 4px #C1DFE6ff' },
            aboutCoverTitleShadow: { textShadow: '2px 2px 4px #424E51ff' },
            aboutCoverSubTitleShadow: { textShadow: '2px 2px 4px #424E51ff' },
            aboutCoverTextShadow: { textShadow: '1px 1px 2px #424E51ff' },
            buttonDafaultShadow: { boxShadow: '2px 4px 4px #424E51ff' },
            servicesTitleShadow: { textShadow: '3px 3px 5px #C1DFE6ff' },
            servicesTextShadow: { textShadow: '2px 2px 4px #C1DFE6ff' },
            opinionsTitleShadow: { textShadow: '3px 3px 5px #C1DFE6ff' },
            opinionsTextShadow: { textShadow: '2px 2px 4px #C1DFE6ff' },
            contactCoverTitleShadow: { textShadow: '2px 2px 4px #424E51ff' },
            contactCoverTextShadow: { textShadow: '1px 1px 2px #424E51ff' },
            contactTitleShadow: { textShadow: '1px 1px 4px #C1DFE6ff' },
            contactTextShadow: { textShadow: '1px 1px 2px #C1DFE6ff' },
            skillScore: { textShadow: '1px 2px 4px #424E51ff' },
            skillName: { textShadow: '1px 2px 2px #424E51ff' },
            contactInfoTextShadow: { textShadow: '0px 1px 2px #C1DFE6ff' },
            brandMessageOfficeCleaners: {
                boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.5)',
            },
        },
    },
    dimensions: {
        page: {
            height: '1150px',
        },
        waterSplash: {
            height: 240,
            width: 240,
        },
        header: {
            height: '5em',
        },
        footer: {
            height: '4.2em',
        },
    },
};
