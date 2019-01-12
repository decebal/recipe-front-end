import React from 'react';
import renderer from 'react-test-renderer';
import OldSchoolMenuLink from './OldSchoolMenuLink';

test('OldSchoolMenuLink renders correctly', () => {
  const tree = renderer
    .create(<OldSchoolMenuLink label="Home" to="/" />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
