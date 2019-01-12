import React from 'react';
import renderer from 'react-test-renderer';
import MainContainer from './MainContainer';


test('MainContainer renders correctly', () => {
  const tree = renderer
    .create(<MainContainer />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
