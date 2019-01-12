import React from 'react';
import renderer from 'react-test-renderer';
import Headline from './Headline';


test('Headline renders correctly', () => {
  const tree = renderer
    .create(<Headline />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
