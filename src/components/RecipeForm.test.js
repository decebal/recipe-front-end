import React from 'react';
import renderer from 'react-test-renderer';
import RecipeForm from './RecipeForm';


test('Recipe renders correctly', () => {
  const tree = renderer
    .create(
      <RecipeForm
        onSubmit={()=>{}}
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
