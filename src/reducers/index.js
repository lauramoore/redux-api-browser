import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { todos, filter, dictionary } from './todos.js';

const rootReducer = combineReducers({
  dictionary,
  todos,
  filter,
  routing: routerReducer
});

export default rootReducer;
