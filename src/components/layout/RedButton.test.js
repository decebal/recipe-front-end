import React from 'react';
import renderer from 'react-test-renderer';
import RedButton from './RedButton';


test('RedButton renders correctly', () => {
  const tree = renderer
    .create(<RedButton />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
