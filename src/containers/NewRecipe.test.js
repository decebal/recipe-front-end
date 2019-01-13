import React from 'react';
import { shallow } from 'enzyme';
import NewRecipe from './NewRecipe';

it('renders without crashing', () => {
  shallow(<NewRecipe  />);
});
