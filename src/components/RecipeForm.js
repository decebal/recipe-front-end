import React from 'react';
import PropTypes from 'prop-types';
import { withFormik } from 'formik';
import styled from 'styled-components';
import * as Yup from 'yup';
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
  handleSubmit: (payload, { setSubmitting }) => {
    // alert(payload.email);
    setSubmitting(false);
  },
  displayName: 'RecipeEditor',
});

const StyledButton = styled.button`
  max-width: 150px;
  margin: 20px 0;
  padding: 12px 20px;
  border-style: none;
  border-radius: 5px;
  background-color: #08c;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.15);
  font-size: 17px;
  font-weight: 500;
  color: #fff;
  cursor: pointer;
  outline: none;
  -webkit-appearance: none;

  &:disabled {
    opacity: .5;
    cursor: not-allowed !important;
  }

  &.outline {
    background-color: #eee;
    border: 1px solid #aaa;
    color: #555;
  }
  
  button + button {
    margin-left: .5rem;
  }
`;


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
    <TextInput
      id="lastName"
      type="text"
      label="Last Name"
      placeholder="Doe"
      error={touched.lastName && errors.lastName}
      value={values.lastName}
      onChange={handleChange}
      onBlur={handleBlur}
    />
    <StyledButton
      type="button"
      className="outline"
      onClick={handleReset}
      disabled={!dirty || isSubmitting}
    >
        Reset
    </StyledButton>
    <StyledButton type="submit" disabled={isSubmitting}>
        Submit
    </StyledButton>
  </form>
);


RecipeForm.propTypes = {
  values: PropTypes.shape({

  }).isRequired,
  touched: PropTypes.string.isRequired,
  errors: PropTypes.string.isRequired,
  dirty: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleBlur: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleReset: PropTypes.func.isRequired,
  isSubmitting: PropTypes.bool.isRequired,
};

RecipeForm.defaultProps = {
};


export default formikEnhancer(RecipeForm);
