import React from 'react';
import debug from 'debug';
import '@testing-library/jest-dom';
import '@jest/globals';
import { render, screen } from '@testing-library/react';

beforeAll(() => debug('Tests -> beforeAll')('react'));
afterEach(() => debug('Tests -> afterEach')('react'));
afterAll(() => debug('Tests -> afterAll')('react'));

describe('ExampleHtml', () => {
    test('a div should render with a text: hi', async () => {
        render(<div data-testid="data_hi">hi</div>);
        const dataTest = await screen.findByText('hi');
        expect(dataTest).toBeInTheDocument();
    });
    test('a react FC should be renedered with text "react"', async () => {
        const ReactFC: React.FC = () => <div>react</div>;

        render(<ReactFC />);
        const reactFC = await screen.findByText('react');
        expect(reactFC).toBeInTheDocument();
    });
});
