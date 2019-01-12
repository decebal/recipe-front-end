/* eslint-disable no-underscore-dangle */
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import ReduxThunk from 'redux-thunk';
import rootReducer from '../reducers';

export default function reduxStore() {
  const composedEnhancers = composeWithDevTools(
    applyMiddleware(ReduxThunk),
  );

  const store = createStore(
    rootReducer,
    composedEnhancers,
  );

  if (process.env.NODE_ENV !== 'production' && module.hot) {
    module.hot.accept('../reducers', () => store.replaceReducer(rootReducer));
  }

  return store;
}
