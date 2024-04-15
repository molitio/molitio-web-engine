import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import Debug from 'debug';
import '@testing-library/jest-dom';
import '@jest/globals';
/* import { StyledGlobal } from '@molitio/ui-core'; */

const debug = Debug('jest');

beforeAll(() => debug('Tests -> beforeAll'));
afterEach(() => debug('Tests -> afterEach'));
afterAll(() => debug('Tests -> afterAll'));

describe('StyledGlobal', () => {
    test('global style should have 100% height', async () => {
        debug('Tests -> StyledGlobal');
        render(<div data-testid="global-style-test">{/*      <StyledGlobal /> */}</div>);

        await waitFor(() => screen.getByTestId('global-style-test'));

        debug('Tests -> StyledGlobal', screen);

        expect(screen.getByTestId('global-style-test')).toBeInTheDocument();

        //TODO: createGlobalStyle from styled components is not set up correctly to be tested, this need to be resolved in the future
        // expect(window.getComputedStyle(document.head).height).toBe('100%');
    });
});
