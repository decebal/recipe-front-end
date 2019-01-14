import React from 'react';
import renderer from 'react-test-renderer';
import List from './List';
import initialState from '../reducers/initialState';


test('List renders correctly', () => {
  const tree = renderer
    .create(<List recipes={initialState.recipes} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
