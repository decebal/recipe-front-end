import React from 'react';
import renderer from 'react-test-renderer';
import Paragraph from './Paragraph';


test('Paragraph renders correctly', () => {
  const tree = renderer
    .create(<Paragraph />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
