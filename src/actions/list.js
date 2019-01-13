// @flow
import type Recipe from '../types/recipe';

import {
  ADD, EDIT, REMOVE,
} from '../constants/actionTypes';

export function remove(recipe: Recipe) {
  return {
    type: REMOVE,
    recipe,
  };
}

export function add(recipe: Recipe) {
  return {
    type: ADD,
    recipe,
  };
}

export function edit(recipe: Recipe) {
  return {
    type: EDIT,
    recipe,
  };
}
