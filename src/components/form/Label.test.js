import React from 'react';
import renderer from 'react-test-renderer';
import Label from './Label';


test('Label renders correctly', () => {
  const tree = renderer
    .create(<Label>Label</Label>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
