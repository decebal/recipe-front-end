import React from 'react';
import renderer from 'react-test-renderer';
import List from './List';


test('List renders correctly', () => {
  const tree = renderer
    .create(<List />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
