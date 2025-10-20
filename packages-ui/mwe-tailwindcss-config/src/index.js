/** @type {import('tailwindcss').Config} */

// Tailwind Design System Theme for MVP
// ------------------------------------
// - Use semantic color tokens for clarity and scalability
// - Includes primary, secondary, tertiary, accent, neutral, state, and grayscale colors
// - Provides spacing, border, radius, shadow, and z-index tokens
// - See comments for usage guidance

module.exports = {
    theme: {
        extend: {
            // Spacing tokens
            spacing: {
                'gutter-bottom': '2rem',
                'gutter-x': '1.5rem',
                section: '3rem',
                container: '1.25rem',
            },
            // Color palette
            colors: {
                // Brand
                primary: '#29345F', // Main brand color (buttons, links, highlights)
                secondary: '#97BB84', // Secondary brand color (backgrounds, accents)
                tertiary: '#cfd3e6', // Tertiary/neutral (body backgrounds, cards)
                accent: '#8300E0', // Accent color (CTAs, highlights, deeper purple)
                special: '#CC00CC', // Special color (CTAs, highlights)
                white: '#e6ebf2',
                black: '#03011e',
                // State
                success: '#22C55E',
                warning: '#FACC15',
                error: '#EF4444',
                info: '#38BDF8',
            },
            // Background color tokens (semantic)
            backgroundColor: {
                primary: '#29345F', // Use for primary buttons, highlights
                secondary: '#97BB84', // Use for secondary backgrounds
                tertiary: '#cfd3e6', // Use for cards, surfaces
            },
            // Text color tokens (semantic)
            textColor: {
                primary: '#29345F',
                secondary: '#4B7F52',
                tertiary: '#cfd3e6',
                accent: '#8300E0',
                special: '#CC00CC',
                disabled: '#9CA3AF',
                placeholder: '#4B5563',
                error: '#EF4444',
                success: '#22C55E',
                warning: '#F59E42',
            },
            // Border radius tokens
            borderRadius: {
                sm: '0.25rem',
                md: '0.5rem',
                lg: '1rem',
                xl: '1.5rem',
                full: '9999px',
            },
            // Border width tokens
            borderWidth: {
                DEFAULT: '1px',
                0: '0',
                2: '2px',
                4: '4px',
                8: '8px',
            },
            // Box shadow tokens
            boxShadow: {
                sm: '0 1px 2px 0 rgba(17, 24, 39, 0.05)', // 0.05 opacity
                DEFAULT: '0 1px 3px 0 rgba(17, 24, 39, 0.1), 0 1px 2px 0 rgba(17, 24, 39, 0.06)', // 0.1, 0.06
                md: '0 4px 6px -1px rgba(17, 24, 39, 0.1), 0 2px 4px -1px rgba(17, 24, 39, 0.06)',
                lg: '0 10px 15px -3px rgba(17, 24, 39, 0.1), 0 4px 6px -2px rgba(17, 24, 39, 0.05)',
                xl: '0 20px 25px -5px rgba(17, 24, 39, 0.1), 0 10px 10px -5px rgba(17, 24, 39, 0.04)',
                '2xl': '0 25px 50px -12px rgba(17, 24, 39, 0.25)', // 0.25
                inner: 'inset 0 2px 4px 0 rgba(17, 24, 39, 0.06)',
                none: 'none',
            },
            // Box shadow color tokens
            boxShadowColor: {
                primary: '#4D5BBC',
                secondary: '#97BB84',
                accent: '#8300E0',
                special: '#CC00CC',
                black: '#111827',
            },
            // Opacity tokens
            opacity: {
                0: '0',
                10: '0.1',
                20: '0.2',
                40: '0.4',
                60: '0.6',
                80: '0.8',
                100: '1',
            },
            // Z-index tokens
            zIndex: {
                auto: 'auto',
                0: 0,
                10: 10,
                20: 20,
                30: 30,
                40: 40,
                50: 50,
                modal: 1000,
                popover: 1100,
                tooltip: 1200,
            },
            // Gradients
            backgroundImage: {
                'gradient-to-172': 'linear-gradient(172deg, #4D5BBC 20%, #1f2937 80%)',
            },
        },
    },
    plugins: [require('@tailwindcss/typography')],
};
