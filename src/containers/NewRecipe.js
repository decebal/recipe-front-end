// @flow
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { push } from 'connected-react-router';
import RecipeForm from '../components/RecipeForm';
import { add } from '../actions/list';
import { Headline } from '../components/layout';
import type Recipe from '../types/recipe';

const NewRecipe = props => (
  <div>
    <Headline>Your new Recipe</Headline>
    <RecipeForm {...props} />
  </div>
);

NewRecipe.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

NewRecipe.defaultProps = {};

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  onSubmit: (recipe: Recipe) => {
    dispatch(add(recipe));
    dispatch(push('/'));
    // ideally this should redirect to the new recipe
    // dispatch(push(`/recipe/${recipe.id}`));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(NewRecipe);
