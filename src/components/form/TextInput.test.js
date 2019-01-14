import React from 'react';
import renderer from 'react-test-renderer';
import TextInput from './TextInput';


test('TextInput renders correctly', () => {
  const tree = renderer
    .create(<TextInput
      id="invalid-uuid-4"
      label="textarea"
      value="Text"
      type="text"
      onChange={() => {}}
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
