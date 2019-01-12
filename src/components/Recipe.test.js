import React from 'react';
import renderer from 'react-test-renderer';
import Recipe from './Recipe';


test('Recipe renders correctly', () => {
  const tree = renderer
    .create(<Recipe
      name=""
      description=""
      ingredients={[]}
      instructions={[]}
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
