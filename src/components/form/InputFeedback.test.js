import React from 'react';
import renderer from 'react-test-renderer';
import InputFeedback from './InputFeedback';


test('InputFeedback renders correctly', () => {
  const tree = renderer
    .create(<InputFeedback />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test('InputFeedback renders correctly with error', () => {
  const tree = renderer
    .create(<InputFeedback error="Required field" />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
