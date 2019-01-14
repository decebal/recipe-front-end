import React from 'react';
import renderer from 'react-test-renderer';
import Recipe from './Recipe';


test('Recipe renders correctly', () => {
  const tree = renderer
    .create((<Recipe
      id="invalid-uuid-4"
      name=""
      description=""
      ingredients={[]}
      instructions={[]}
      onDelete={()=>{}}
    />))
    .toJSON();
  expect(tree).toMatchSnapshot();
});
