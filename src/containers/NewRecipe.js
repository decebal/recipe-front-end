// @flow
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Recipe from '../components/Recipe';

const NewRecipe = props => (
  <Recipe {...props} />
);

NewRecipe.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  ingredients: PropTypes.arrayOf(PropTypes.string),
  instructions: PropTypes.arrayOf(PropTypes.string),
};

NewRecipe.defaultProps = {
  name: '',
  description: '',
  ingredients: [],
  instructions: [],
};

const mapStateToProps = () => ({});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(NewRecipe);
