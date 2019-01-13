import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import Sidebar from './Sidebar';


test('Sidebar renders correctly', () => {
  const tree = renderer
    .create(<MemoryRouter initialEntries={['/']}>
      <Sidebar />
    </MemoryRouter>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
