// @flow
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { push } from 'connected-react-router';
import RecipeForm from '../components/RecipeForm';
import { add } from '../actions/list';
import { Headline } from '../components/layout';

const NewRecipe = props => (
  <div>
    <Headline>Your new Recipe</Headline>
    <RecipeForm {...props} />
  </div>
);

NewRecipe.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

NewRecipe.defaultProps = {

};

const mapStateToProps = () => ({});


const mapDispatchToProps = dispatch => ({
  handleSubmit: (recipe) => {
    dispatch(add(recipe));
    dispatch(push(`/recipe/${recipe.id}`));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(NewRecipe);
