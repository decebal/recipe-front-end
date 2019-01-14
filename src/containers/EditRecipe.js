// @flow
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { lensPath, view } from 'ramda';
import { push } from 'connected-react-router';
import { Headline } from '../components/layout';
import RecipeForm from '../components/RecipeForm';
import { edit } from '../actions/list';

const EditRecipe = ({
  id, name, description, ingredients, instructions, handleSubmit,
}) => (
  <div>
    <Headline>Edit your Recipe</Headline>
    <RecipeForm
      values={{
        name, description, ingredients, instructions,
      }}
      handleSubmit={() => handleSubmit({ id })}
    />
  </div>
);

EditRecipe.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      uuid: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  id: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
  ingredients: PropTypes.arrayOf(PropTypes.string),
  instructions: PropTypes.arrayOf(PropTypes.string),
  handleSubmit: PropTypes.func.isRequired,
};

EditRecipe.defaultProps = {
  id: '',
  name: '',
  description: '',
  ingredients: [],
  instructions: [],
};

const mapStateToProps = (state, props) => ({
  id: props.match.params.uuid,
  name: view(lensPath(['recipes', props.match.params.uuid, 'name']), state),
  description: view(lensPath(['recipes', props.match.params.uuid, 'description']), state),
  ingredients: view(lensPath(['recipes', props.match.params.uuid, 'ingredients']), state),
  instructions: view(lensPath(['recipes', props.match.params.uuid, 'instructions']), state),
});


const mapDispatchToProps = dispatch => ({
  handleSubmit: (recipe) => {
    dispatch(edit(recipe));
    dispatch(push(`/recipe/${recipe.id}`));
  },
});


export default connect(mapStateToProps, mapDispatchToProps)(EditRecipe);
