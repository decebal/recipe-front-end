import React from 'react';
import { shallow } from 'enzyme';
import EditRecipe from './EditRecipe';

it('renders without crashing', () => {
  shallow(<EditRecipe  />);
});
