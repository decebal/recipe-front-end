import React from 'react';
import renderer from 'react-test-renderer';
import GreenButton from './GreenButton';


test('GreenButton renders correctly', () => {
  const tree = renderer
    .create(<GreenButton />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
