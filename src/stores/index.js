import { createStore, combineReducers, applyMiddleware, compose } from 'redux';

import setting from './setting';

const middleware = [];

const staticReducers = {
  setting
};

export default function configureStore(initialState) {
  let store = createStore(
    createReducer(),
    initialState,
    applyMiddleware(...middleware)
  );

  if (
    process.env.NODE_ENV === 'development' &&
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION__
  ) {
    store = createStore(
      createReducer(),
      initialState,
      compose(
        applyMiddleware(...middleware),
        window.__REDUX_DEVTOOLS_EXTENSION__()
      )
    );
  }

  store.asyncReducers = {};

  store.injectReducer = (key, asyncReducer) => {
    store.asyncReducers[key] = asyncReducer;
    store.replaceReducer(createReducer(store.asyncReducers));
  };

  // Return the modified store
  return store;
}

function createReducer(asyncReducers) {
  return combineReducers({
    ...staticReducers,
    ...asyncReducers
  });
}
