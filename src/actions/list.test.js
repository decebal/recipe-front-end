import configureMockStore from 'redux-mock-store';
import {
  ADD, EDIT, REMOVE,
} from '../constants/actionTypes';

import { add, remove, edit } from './list';


describe('home actions', () => {
  let store;

  beforeEach(() => {
    const mockStore = configureMockStore();
    store = mockStore({});
  });

  describe('remove action', () => {
    it('trigger REMOVE action with given recipe', () => {
      // given
      const recipe ={
        id: 1,
        name: 'Keto Breakfast Tacos With Bacon and Guacamole',
        description: `Nutritional Information (Per Serving):
Calories: 387 Protein: 11g Carbs: 9g Net Carbs: 4g Sugar: 0g Sugar Alcohol:0g
Fiber: 5g
Fat: 35g
Saturated Fat: 16g Polyunsaturated: 3g Monounsaturated: 10g Trans fat: 0g
Cholesterol: 210g Sodium: 525mg Potassium: 369mg Vitamin A: 71%
Vitamin C: 11% Calcium: 2% Iron: 9%`,
        ingredients: [
          '1 tablespoon Brain Octane Oil',
          '2 pasture-raised eggs',
          '1 tablespoon grass-fed ghee',
          '1 medium organic avocado',
          '1/4 teaspoon Himalayan pink salt',
          '1/4 cup chopped organic romaine lettuce',
          '2 slices cooked uncured all natural bacon',
          '3 tablespoons diced cooked organic sweet potatoes',
          'Optional: garnish of organic micro cilantro',
        ],
        instructions: [
          'Heat a small skillet to medium heat and add 1 tablespoon of ghee.',
          'Crack one egg into the center of the skillet and pierce the yolk.',
          'Cook the egg for approximately 1-2 minutes on each side or until solid\n'
          + 'but not overcooked. Remove from pan and place on a paper towel or\n'
          + 'parchment paper-lined plate.',
          'Repeat with other egg. These will be your taco shells.',
          'In a small bowl, mash avocado along with 1 tablespoon of Brain Octane\n'
          + 'Oil plus Himalayan pink salt.',
        ],
      };

      // when
      store.dispatch(remove(recipe));

      // then
      expect(store.getActions()).toEqual([{recipe, type: REMOVE}]);
    });
  });
  describe('add action', () => {
    it('trigger INCREMENT action with given product', () => {
      // given
      const recipe ={
        id: 1,
        name: 'Keto Breakfast Tacos With Bacon and Guacamole',
        description: `Nutritional Information (Per Serving):
Calories: 387 Protein: 11g Carbs: 9g Net Carbs: 4g Sugar: 0g Sugar Alcohol:0g
Fiber: 5g
Fat: 35g
Saturated Fat: 16g Polyunsaturated: 3g Monounsaturated: 10g Trans fat: 0g
Cholesterol: 210g Sodium: 525mg Potassium: 369mg Vitamin A: 71%
Vitamin C: 11% Calcium: 2% Iron: 9%`,
        ingredients: [
          '1 tablespoon Brain Octane Oil',
          '2 pasture-raised eggs',
          '1 tablespoon grass-fed ghee',
          '1 medium organic avocado',
          '1/4 teaspoon Himalayan pink salt',
          '1/4 cup chopped organic romaine lettuce',
          '2 slices cooked uncured all natural bacon',
          '3 tablespoons diced cooked organic sweet potatoes',
          'Optional: garnish of organic micro cilantro',
        ],
        instructions: [
          'Heat a small skillet to medium heat and add 1 tablespoon of ghee.',
          'Crack one egg into the center of the skillet and pierce the yolk.',
          'Cook the egg for approximately 1-2 minutes on each side or until solid\n'
          + 'but not overcooked. Remove from pan and place on a paper towel or\n'
          + 'parchment paper-lined plate.',
          'Repeat with other egg. These will be your taco shells.',
          'In a small bowl, mash avocado along with 1 tablespoon of Brain Octane\n'
          + 'Oil plus Himalayan pink salt.',
        ],
      };

      // when
      store.dispatch(add(recipe));

      // then
      expect(store.getActions()).toEqual([{recipe, type: ADD}]);
    });
  });
  describe('decrement action', () => {
    it('trigger DECREMENT action with given product', () => {
      // given
      const recipe ={
        id: 1,
        name: 'Keto Breakfast Tacos With Bacon and Guacamole',
        description: `Nutritional Information (Per Serving):
Calories: 387 Protein: 11g Carbs: 9g Net Carbs: 4g Sugar: 0g Sugar Alcohol:0g
Fiber: 5g
Fat: 35g
Saturated Fat: 16g Polyunsaturated: 3g Monounsaturated: 10g Trans fat: 0g
Cholesterol: 210g Sodium: 525mg Potassium: 369mg Vitamin A: 71%
Vitamin C: 11% Calcium: 2% Iron: 9%`,
        ingredients: [
          '1 tablespoon Brain Octane Oil',
          '2 pasture-raised eggs',
          '1 tablespoon grass-fed ghee',
          '1 medium organic avocado',
          '1/4 teaspoon Himalayan pink salt',
          '1/4 cup chopped organic romaine lettuce',
          '2 slices cooked uncured all natural bacon',
          '3 tablespoons diced cooked organic sweet potatoes',
          'Optional: garnish of organic micro cilantro',
        ],
        instructions: [
          'Heat a small skillet to medium heat and add 1 tablespoon of ghee.',
          'Crack one egg into the center of the skillet and pierce the yolk.',
          'Cook the egg for approximately 1-2 minutes on each side or until solid\n'
          + 'but not overcooked. Remove from pan and place on a paper towel or\n'
          + 'parchment paper-lined plate.',
          'Repeat with other egg. These will be your taco shells.',
          'In a small bowl, mash avocado along with 1 tablespoon of Brain Octane\n'
          + 'Oil plus Himalayan pink salt.',
        ],
      };

      // when
      store.dispatch(edit(recipe));

      // then
      expect(store.getActions()).toEqual([{recipe, type: EDIT}]);
    });
  });
});
