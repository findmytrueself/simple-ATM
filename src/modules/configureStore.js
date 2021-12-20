import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from '.';
import { persistStore } from 'redux-persist';
// createStore with redux-thunk, reduxDevtools
export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk)),
);

export const persistor = persistStore(store);

const stores = { store, persistor };

export default stores;
