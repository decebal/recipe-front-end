/* eslint-disable no-underscore-dangle */
import { applyMiddleware, createStore } from 'redux';
import { createBrowserHistory } from 'history';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { routerMiddleware } from 'connected-react-router';
import rootReducer from '../reducers';

export const history = createBrowserHistory();

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer(history));

export default function reduxStore() {
  const composedEnhancers = composeWithDevTools(
    applyMiddleware(routerMiddleware(history)),
  );

  const store = createStore(
    persistedReducer,
    composedEnhancers,
  );

  const persistor = persistStore(store);

  if (process.env.NODE_ENV !== 'production' && module.hot) {
    module.hot.accept('../reducers', () => store.replaceReducer(rootReducer(history)));
  }

  return { store, persistor };
}
