import React from 'react';
import renderer from 'react-test-renderer';
import Recipe from './Recipe';


test('Recipe renders correctly', () => {
  const component = renderer
    .create((<Recipe
      id="invalid-uuid-4"
      name="name"
      description="description"
      ingredients={['Ingredient']}
      instructions={['Step 1']}
      onDelete={()=>{}}
    />));
  const tree = component.toJSON();

  component.root.findByType('button').props.onClick();

  expect(tree).toMatchSnapshot();
});
