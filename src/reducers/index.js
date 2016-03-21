import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { dictionary, activeLanguage, github } from './content.js';

const rootReducer = combineReducers({
  dictionary,
  activeLanguage,
  github,
  routing: routerReducer
});

export default rootReducer;
