import React from 'react';
import renderer from 'react-test-renderer';
import GenericNotFound from './GenericNotFound';


test('GenericNotFound renders correctly', () => {
  const tree = renderer
    .create(<GenericNotFound />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
