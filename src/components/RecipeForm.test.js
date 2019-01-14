import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import RecipeForm from './RecipeForm';


describe('<RecipeForm />', () => {
  // it('Test submit form event', () => {
  //   const mockCallBack = jest.fn();
  //
  //   const button = shallow((<RecipeForm onClick={mockCallBack} />));
  //   button.find({ id: "submit" }).simulate('click');
  //   expect(mockCallBack.mock.calls.length).toEqual(1);
  // });

  test('RecipeForm renders correctly', () => {
    const component = renderer
      .create(
        <RecipeForm
          onSubmit={()=>{}}
        />
      );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
