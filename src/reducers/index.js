import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import recipes from './recipesReducer';


const rootReducer = history => combineReducers({
  recipes,
  router: connectRouter(history),
});

export default rootReducer;
