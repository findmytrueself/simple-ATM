import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import card from './card';

const persistConfig = {
  key: 'root',
  storage, // save in localstorage
  whiteList: ['card'], // card reducer save in localstorage
};
const rootReducer = combineReducers({ card });

export default persistReducer(persistConfig, rootReducer);
