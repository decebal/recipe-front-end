// @flow

import React from 'react';
import PropTypes from 'prop-types';
import { Headline, Paragraph } from './layout';
import type RecipeType from '../types/recipe';

const Recipe = ({
  name, description, ingredients, instructions,
}: RecipeType) => (
  <div>
    <Headline>{name}</Headline>
    <Paragraph>{description}</Paragraph>
    <p>{ingredients}</p>
    <p>{instructions}</p>
  </div>
);

Recipe.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
  instructions: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Recipe;
