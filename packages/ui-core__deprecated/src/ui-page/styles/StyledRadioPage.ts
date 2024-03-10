import styled from 'styled-components';

const headerItemSpacingTop = '2em';
const headerItemSpacingSide = '12em';
//const playerWidthAndHeightMicro = '8em';
const playerWidthAndHeightSM = '80vw';
const playerWidthAndHeightLG = '80vw';
const playerWidthAndHeightWIDE = '60vh';

export const PageContainer = styled.div`
    top: env(safe-area-inset-top, 0px);
    left: env(safe-area-inset-left, 0px);

    z-index: 100;
    & * {
        position: 'relative';
        z-index: 60;
    }
`;

export const RadioPageLogo = styled.div`
    position: fixed;
    top: ${headerItemSpacingTop};
    left: ${headerItemSpacingSide};
    right: auto;
    z-index: 100;
    & > * {
        //maxHeight: 5em,
    }
    @media (orientation: landscape) and (max-width: 1400px) {
        left: calc(${headerItemSpacingSide} - 2em);
    }
    @media (orientation: landscape) and (max-width: 1200px) {
        left: calc(${headerItemSpacingSide} - 4em);
        & > * {
            max-height: 8em;
        }
    }
    @media (orientation: landscape) and (max-height: 992px) {
        left: 4em;
        & > * {
            max-height: 7em;
        }
    }
    @media (orientation: landscape) and (max-height: 776px) {
        left: 3em;
        & > * {
            max-height: 6em;
        }
    }
    @media (orientation: landscape) and (max-height: 576px) {
        top: 1em;
        & > * {
            max-height: 3em;
        }
    }
    @media (orientation: portrait) {
        left: 50%;
        transform: translateX(-50%);
        margin-right: auto;
        margin-left: auto;
    }
    @media (orientation: portrait) and (max-height: 992px) {
        & > * {
            max-height: 6em;
        }
    }
    @media (orientation: portrait) and (max-height: 776px) {
        & > * {
            max-height: 4em;
        }
    }
`;

export const RadioPageSocialButtons = styled.div`
    position: fixed;
    z-index: 100;
    width: max-content;
    height: max-content;
    top: ${headerItemSpacingTop};
    right: ${headerItemSpacingSide};
    bottom: auto;
    @media (orientation: landscape) and (max-width: 1400px) {
        right: calc(${headerItemSpacingSide} - 2em);
    }
    @media (orientation: landscape) and (max-width: 1200px) {
        right: calc(${headerItemSpacingSide} - 4em);
    }
    @media (orientation: landscape) and (max-height: 992px) {
        right: 4em;
        & > * {
            max-height: 2em;
        }
    }
    @media (orientation: landscape) and (max-height: 776px) {
        right: 3em;
        & > * {
            max-height: 2em;
        }
    }
    @media (orientation: landscape) and (max-height: 576px) {
        top: 1em;
    }
    @media (orientation: portrait) {
        top: auto;
        bottom: 0.1em;
        left: 0;
        right: 0;
        margin-left: auto;
        margin-right: auto;
    }
    @media (orientation: portrait) and (max-height: 776px) {
        & > * {
            max-height: 2em;
        }
    }
`;

export const RadioPageContent = styled.div`
    flex: 1;
    flex-wrap: nowrap;
    height: 100vh;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const RadioPagePlayer = styled.div`
    width: ${playerWidthAndHeightWIDE};
    height: ${playerWidthAndHeightWIDE};
    margin-top: -4em;
    @media (orientation: landscape) and (max-height: 576px) {
        margin-top: 1em;
    }
    @media (orientation: portrait) {
        max-width: ${playerWidthAndHeightLG};
        max-height: ${playerWidthAndHeightLG};
    }
    @media (orientation: portrait) and (max-height: 992px) {
        margin-top: 1em;
    }
    @media (orientation: portrait) and (max-height: 776px) {
        margin-top: 1em;
        max-width: ${playerWidthAndHeightSM};
        max-height: ${playerWidthAndHeightSM};
    }
`;

export const RadioPageFooter = styled.div`
    z-index: 70;
    position: fixed;
    left: 0;
    bottom: 0;
    width: calc(env(safe-area-inset-left, 0px) + 100% + env(safe-area-inset-right, 0px));
    height: 5em;
    background-color: ${(props) => props.theme?.palette?.background?.default ?? ''};
    @media (orientation: landscape) and (max-height: 992px) {
        max-height: 4em;
    }
    @media (orientation: landscape) and (max-height: 576px) {
        max-height: 1em;
        & :nth-of-type(n + 1) {
            visibility: hidden;
        }
    }
    @media (orientation: portrait) {
        max-height: 3.5em;
        & :nth-of-type(n + 1) {
            visibility: hidden;
        }
    }
    @media (orientation: portrait) and (max-height: 776px) {
        max-height: 3em;
    }
`;
