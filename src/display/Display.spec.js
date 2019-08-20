import React from 'react'
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react'

import Display from './Display';

describe('<Display /> initialState', () => {
    it('matches snapshot', () => {
        const tree = renderer.create(<Display />);
        expect(tree.toJSON()).toMatchSnapshot();
    })
    it('gate lock status defaults to Unlock', () => {
        const { getByText } = render(<Display />);
        expect(getByText(/unlocked/i)).toBeTruthy();
    })
    it('gate open status defaults to open', () => {
        const { getByText } = render(<Display />);
        expect(getByText(/open/i)).toBeTruthy();
    })
})