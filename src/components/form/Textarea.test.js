import React from 'react';
import renderer from 'react-test-renderer';
import Textarea from './Textarea';


test('Textarea renders correctly', () => {
  const tree = renderer
    .create(<Textarea
      id="invalid-uuid-4"
      label="textarea"
      value="Text"
      type="text"
      onChange={() => {}}
    />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
