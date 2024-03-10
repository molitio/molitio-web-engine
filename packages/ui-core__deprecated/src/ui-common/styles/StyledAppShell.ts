import { createGlobalStyle } from 'styled-components';

export const StyledGlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        font-size: 16px;
        font-weight: lighter;
        min-width: 375px;
        min-height: 400px;
    }
    html {
        overflow-x: clip;
        pointer-events: auto;
        scroll-behavior: smooth;
        padding-top: env(safe-area-inset-top, 0px);
        padding-left: env(safe-area-inset-left, 0px);
        padding-right: env(safe-area-inset-right, 0px);
        padding-bottom: env(safe-area-inset-bottom, 0px);
    }
                    @media (max-width: 1400px) {
        html {
            font-size: 20px;
        }
    }
    @media (max-width: 1200px) {
        html {
            font-size: 18px;
        }
    }
    @media (max-width: 992px) {
        html {
            font-size: 17px;
        }
    }
    @media (max-width: 768px) {
        html {
            font-size: 16px;
        }
    }
    @media (max-width: 576px) {
        html {
            font-size: 16px;
        }
    } 
    body {
        width: 100vw;
        min-height: 100vh;
    }
    `;
