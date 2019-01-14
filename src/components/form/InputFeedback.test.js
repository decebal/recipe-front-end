import React from 'react';
import renderer from 'react-test-renderer';
import InputFeedback from './InputFeedback';


test('InputFeedback renders correctly', () => {
  const tree = renderer
    .create(<InputFeedback />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
