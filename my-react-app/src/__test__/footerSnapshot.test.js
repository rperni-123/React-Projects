import React from 'react';
import Footer from '../component/Header';
import {create} from 'react-test-renderer'

describe('snapshot testing', () => {
    test('testing footer', () => {
        let tree = create(<Footer/>)
        expect(tree.toJSON()).toMatchSnapshot()
    })
})

