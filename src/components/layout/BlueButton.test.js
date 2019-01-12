import React from 'react';
import renderer from 'react-test-renderer';
import BlueButton from './BlueButton';


test('BlueButton renders correctly', () => {
  const tree = renderer
    .create(<BlueButton />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
