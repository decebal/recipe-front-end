// @flow
import * as R from 'ramda';
import uuid4 from 'uuid4';
import initialState from './initialState';
import type Recipe from '../types/recipe';
import {
  ADD, EDIT, REMOVE,
} from '../constants/actionTypes';


const update = (state, action) => R.over(
  R.lensPath([action.recipe.id]),
  oldRecipe => ({ ...oldRecipe, ...action.recipe }),
  state,
);

const add = (state, action) => {
  const newId = R.view(R.lensPath(['recipe', 'id']), action) !== undefined
    ? R.view(R.lensPath(['recipe', 'id']), action)
    : uuid4();
  return R.set(
    R.lensPath([newId]),
    { ...action.recipe, id: newId },
    state,
  );
};

export default function recipes(
  state: {} = initialState.recipes,
  action: {type: string, recipe: Recipe},
) {
  switch (action.type) {
    case ADD:
      return add(state, action);
    case REMOVE:
      return R.filter(i => i.id !== action.recipe.id, state);
    case EDIT:
      return update(state, action);
    default:
      return state;
  }
}
