import React from 'react';
import { shallow } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import Main from './Main';

it('renders without crashing', () => {
  shallow(<MemoryRouter initialEntries={['/']}>
    <Main />
  </MemoryRouter>);
});
