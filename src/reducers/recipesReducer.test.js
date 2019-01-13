import { ADD, EDIT, REMOVE } from '../constants/actionTypes';
import recipeReducer from './recipesReducer';

describe('recipesReducer', () => {
  it('ADD', () => {
    // given
    const beforeState = {};
    const recipe = {
      id: "3c328b6a-d254-4c5a-9ad1-32254446689b",
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
    const action = {type: ADD, recipe};
    // when
    const afterState = recipeReducer(beforeState, action);
    // then
      expect(afterState).toEqual({ "3c328b6a-d254-4c5a-9ad1-32254446689b": recipe });
  });
  it('REMOVE from empty state', () => {
    // given
    const beforeState = {};
    const recipe ={
      id: "3c328b6a-d254-4c5a-9ad1-32254446689b",
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
    const action = {type: REMOVE, recipe};
    // when
    const afterState = recipeReducer(beforeState, action);
    // then
    expect(afterState).toEqual({});
  });
  it('REMOVE and empty state', () => {
    // given
    const recipe ={
      id: "3c328b6a-d254-4c5a-9ad1-32254446689b",
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
    const beforeState = { "3c328b6a-d254-4c5a-9ad1-32254446689b": recipe };
    const action = {type: REMOVE, recipe};
    // when
    const afterState = recipeReducer(beforeState, action);
    // then
    expect(afterState).toEqual({});
  });
  it('EDIT ', () => {
    // given
    const recipe = {
      id: "3c328b6a-d254-4c5a-9ad1-32254446689b",
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
    const beforeState = { "3c328b6a-d254-4c5a-9ad1-32254446689b": recipe };
    const alteration = {
      id: "3c328b6a-d254-4c5a-9ad1-32254446689b",
      description: "Altered description",
    };
    const expectedRecipe = {
      id: "3c328b6a-d254-4c5a-9ad1-32254446689b",
      name: 'Keto Breakfast Tacos With Bacon and Guacamole',
      description: "Altered description",
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
    const expectedState = { "3c328b6a-d254-4c5a-9ad1-32254446689b": expectedRecipe };

    const action = { type: EDIT, recipe: alteration };
    // when
    const afterState = recipeReducer(beforeState, action);
    // then
    expect(afterState).toEqual(expectedState);
  });
});
