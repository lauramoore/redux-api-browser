import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { dictionary, activeLanguage, github, network } from './content.js';

const rootReducer = combineReducers({
  dictionary,
  activeLanguage,
  github,
  network,
  routing: routerReducer
});

export default rootReducer;
