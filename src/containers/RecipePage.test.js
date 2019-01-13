import React from 'react';
import { shallow } from 'enzyme';
import RecipePage from './RecipePage';

it('renders without crashing', () => {
  shallow(<RecipePage  />);
});
