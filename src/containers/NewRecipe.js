// @flow
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import RecipeForm from '../components/RecipeForm';

const NewRecipe = props => (
  <RecipeForm {...props} />
);

NewRecipe.propTypes = {
  onDelete: PropTypes.func.isRequired,
};

NewRecipe.defaultProps = {

};

const mapStateToProps = () => ({});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(NewRecipe);
