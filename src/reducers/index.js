import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { dictionary, activeLanguage } from './content.js';

const rootReducer = combineReducers({
  dictionary,
  activeLanguage,
  routing: routerReducer
});

export default rootReducer;
