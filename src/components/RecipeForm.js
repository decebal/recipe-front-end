import React from 'react';
import PropTypes from 'prop-types';
import { withFormik } from 'formik';
import * as Yup from 'yup';
import {
  Button, ButtonGroup, H2, Hr, Row,
} from '@bootstrap-styled/v4/dist/@bootstrap-styled/v4';
import { lensPath, range, view } from 'ramda';
import TextInput from './form/TextInput';
import Textarea from './form/Textarea';

const formikEnhancer = withFormik({
  validationSchema: Yup.object().shape({
    name: Yup.string()
      .min(2, 'The recipe name must be longer than 2 characters')
      .required('Recipe Name is required.'),
    description: Yup.string()
      .min(2, 'The recipe description must be longer than 2 characters')
      .required('Description is required.'),
    ingredients: Yup.array().of(Yup.string()
      .min(2, 'The recipe ingredient must be longer than 2 characters'))
      .min(2, 'The recipe must have at least 2 ingredients')
      .required('Ingredients are required!'),
    instructions: Yup.array().of(Yup.string()
      .min(2, 'The recipe instruction step must be longer than 2 characters'))
      .min(2, 'The recipe must have at least 2 steps')
      .required('Ingredients are required!'),
  }),

  mapPropsToValues: ({ recipe }) => ({
    ...recipe,
  }),

  handleSubmit: (payload, { setSubmitting, props }) => {
    const { onSubmit } = props;
    setSubmitting(true);
    onSubmit(payload);
    setSubmitting(false);
  },
  displayName: 'RecipeEditor',
});

const RecipeForm = ({
  values,
  touched,
  errors,
  dirty,
  handleChange,
  handleBlur,
  handleSubmit,
  handleReset,
  isSubmitting,
}) => (
  <form onSubmit={handleSubmit}>
    <TextInput
      id="name"
      type="text"
      label="Recipe Name"
      placeholder="Recipe Name"
      error={touched.name && errors.name}
      value={values.name}
      onChange={handleChange}
      onBlur={handleBlur}
    />
    <Textarea
      id="description"
      type="text"
      label="Recipe Description"
      placeholder="Describe the recipe in a few words"
      error={touched.description && errors.description}
      value={values.description}
      onChange={handleChange}
      onBlur={handleBlur}
    />
    <Hr />
    <Row>
      <H2>Ingredients</H2>
    </Row>
    {range(0, 9).map(key => (
      <TextInput
        key={`input-${key}`}
        id={`ingredients[${key}]`}
        type="text"
        placeholder="Ingredient"
        label={`Ingredient no. ${key + 1}`}
        error={view(lensPath(['ingredients', key]), touched) && view(lensPath(['ingredients', key]), errors)}
        value={view(lensPath(['ingredients', key]), values)}
        onChange={handleChange}
        onBlur={handleBlur}
      />
    ))}
    <Hr />
    <Row>
      <H2>Instructions</H2>
    </Row>
    {range(0, 9).map(key => (
      <TextInput
        key={`input-${key}`}
        id={`instructions[${key}]`}
        type="text"
        placeholder="Instruction"
        label={`Step no. ${key + 1}`}
        error={view(lensPath(['instructions', key]), touched) && view(lensPath(['instructions', key]), errors)}
        value={view(lensPath(['instructions', key]), values)}
        onChange={handleChange}
        onBlur={handleBlur}
      />
    ))}
    <Hr />
    <Row style={{ flexFlow: 'row-reverse' }}>
      <ButtonGroup>
        <Button color="secondary" onClick={handleReset} disabled={!dirty || isSubmitting}>Reset</Button>
        <Button color="primary" disabled={isSubmitting} type="submit" id="submit">Submit</Button>
      </ButtonGroup>
    </Row>
    <Hr />
  </form>
);


RecipeForm.propTypes = {
  values: PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
    ingredients: PropTypes.arrayOf(PropTypes.string),
    instructions: PropTypes.arrayOf(PropTypes.string),
  }),
  touched: PropTypes.shape({
    name: PropTypes.bool,
    description: PropTypes.bool,
    ingredients: PropTypes.arrayOf(PropTypes.bool),
    instructions: PropTypes.arrayOf(PropTypes.bool),
  }),
  errors: PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
    ingredients: PropTypes.arrayOf(PropTypes.string),
    instructions: PropTypes.arrayOf(PropTypes.string),
  }),
  dirty: PropTypes.bool,
  isSubmitting: PropTypes.bool,
  handleChange: PropTypes.func.isRequired,
  handleBlur: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleReset: PropTypes.func.isRequired,
};

RecipeForm.defaultProps = {
  values: {
    name: '',
    description: '',
    ingredients: [],
    instructions: [],
  },
  touched: {
    name: false,
    description: false,
    ingredients: [],
    instructions: [],
  },
  errors: {
    name: null,
    description: null,
    ingredients: [],
    instructions: [],
  },
  dirty: false,
  isSubmitting: false,
};


export default formikEnhancer(RecipeForm);
