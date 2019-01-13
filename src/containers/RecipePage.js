// @flow
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { lensPath, view } from 'ramda';
import Recipe from '../components/Recipe';

const RecipePage = props => (
  <Recipe {...props} />
);

RecipePage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      uuid: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  name: PropTypes.string,
  description: PropTypes.string,
  ingredients: PropTypes.arrayOf(PropTypes.string),
  instructions: PropTypes.arrayOf(PropTypes.string),
};

RecipePage.defaultProps = {
  name: '',
  description: '',
  ingredients: [],
  instructions: [],
};

const mapStateToProps = (state, props) => ({
  name: view(lensPath(['recipes', props.match.params.uuid, 'name']), state),
  description: view(lensPath(['recipes', props.match.params.uuid, 'description']), state),
  ingredients: view(lensPath(['recipes', props.match.params.uuid, 'ingredients']), state),
  instructions: view(lensPath(['recipes', props.match.params.uuid, 'instructions']), state),
});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(RecipePage);
