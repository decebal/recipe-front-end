import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import OldSchoolMenuLink from './OldSchoolMenuLink';

test('OldSchoolMenuLink renders correctly', () => {
  const tree = renderer
    .create(<MemoryRouter initialEntries={['/']}>
      <OldSchoolMenuLink label="Home" to="/" />
    </MemoryRouter>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test('OldSchoolMenuLink renders correctly', () => {
  const tree = renderer
    .create(<MemoryRouter initialEntries={['/']}>
      <OldSchoolMenuLink label="Home" to="/recipe" />
    </MemoryRouter>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
