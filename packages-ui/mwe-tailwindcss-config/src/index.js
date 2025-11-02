/** @type {import('tailwindcss').Config} */

// Tailwind Design System Theme for MVP
// ------------------------------------
// - Use semantic color tokens for clarity and scalability
// - Includes primary, secondary, tertiary, accent, neutral, state, and grayscale colors
// - Provides spacing, border, radius, shadow, and z-index tokens
// - See comments for usage guidance
console.log('Loading MWE Tailwind CSS Config');
module.exports = {
    css: `
@theme {
  --spacing-gutter-bottom: 2rem;
  --spacing-gutter-x: 1.5rem;
  --spacing-section: 3rem;
  --spacing-container: 1.25rem;

  --color-primary: #29345F;
  --color-secondary: #97BB84;
  --color-tertiary: #cfd3e6;
  --color-accent: #8300E0;
  --color-special: #CC00CC;
  --color-white: #e6ebf2;
  --color-black: #03011e;
  --color-success: #22C55E;
  --color-warning: #FACC15;
  --color-error: #EF4444;
  --color-info: #38BDF8;

  --color-bg-primary: #29345F;
  --color-bg-secondary: #97BB84;
  --color-bg-tertiary: #cfd3e6;

  --color-text-primary: #29345F;
  --color-text-secondary: #4B7F52;
  --color-text-tertiary: #cfd3e6;
  --color-text-accent: #8300E0;
  --color-text-special: #CC00CC;
  --color-text-disabled: #9CA3AF;
  --color-text-placeholder: #4B5563;
  --color-text-error: #EF4444;
  --color-text-success: #22C55E;
  --color-text-warning: #F59E42;

  --radius-sm: 0.25rem;
  --radius-md: 0.5rem;
  --radius-lg: 1rem;
  --radius-xl: 1.5rem;
  --radius-full: 9999px;

  --border-width: 1px;
  --border-width-0: 0;
  --border-width-2: 2px;
  --border-width-4: 4px;
  --border-width-8: 8px;

  --shadow-sm: 0 1px 2px 0 rgba(17, 24, 39, 0.05);
  --shadow: 0 1px 3px 0 rgba(17, 24, 39, 0.1), 0 1px 2px 0 rgba(17, 24, 39, 0.06);
  --shadow-md: 0 4px 6px -1px rgba(17, 24, 39, 0.1), 0 2px 4px -1px rgba(17, 24, 39, 0.06);
  --shadow-lg: 0 10px 15px -3px rgba(17, 24, 39, 0.1), 0 4px 6px -2px rgba(17, 24, 39, 0.05);
  --shadow-xl: 0 20px 25px -5px rgba(17, 24, 39, 0.1), 0 10px 10px -5px rgba(17, 24, 39, 0.04);
  --shadow-2xl: 0 25px 50px -12px rgba(17, 24, 39, 0.25);
  --shadow-inner: inset 0 2px 4px 0 rgba(17, 24, 39, 0.06);
  --shadow-none: none;

  --shadow-color-primary: #4D5BBC;
  --shadow-color-secondary: #97BB84;
  --shadow-color-accent: #8300E0;
  --shadow-color-special: #CC00CC;
  --shadow-color-black: #111827;

  --z-index-auto: auto;
  --z-index-0: 0;
  --z-index-10: 10;
  --z-index-20: 20;
  --z-index-30: 30;
  --z-index-40: 40;
  --z-index-50: 50;
  --z-index-modal: 1000;
  --z-index-popover: 1100;
  --z-index-tooltip: 1200;

  --background-image-gradient-to-172: linear-gradient(172deg, #97BB84 20%, #4D5BBC 80%);
}
`,
    config: {
        plugins: [require('@tailwindcss/typography')],
    },
};
