import { List, Map } from 'immutable';
import * as ActionTypes from '../constants/ActionTypes.js';

/*
 * Each method here defines a Redux Store that will be available
 * as a state property named to match the method that creates it.
 * Each store needs to be intialized with an object that will meet
 * the expectations for data in the state.
 */

 /*
  * todos Store is an immutable list todo object as immuntable Map.
  */
const todoSeed = List([
  Map({ text: 'my first todo', completed: false }),
  Map({ text: 'my second todo', completed: false })]);

export function todos(state = todoSeed, action = null) {
  const { type, payload } = action;
  switch (type) {
    case ActionTypes.ADD_TODO:
      return state.todos.push(Map(payload));
    case ActionTypes.DELETE_TODO:
      return state.delete(payload.index);
    case ActionTypes.CLEAR_TODO:
      return state.filter((todo) => !todo.get('completed'));
    case ActionTypes.TOGGLE_CHECKED:
      return state.update(payload.index, todo => todo.set('completed', !todo.get('completed')));
    default:
      return state;
  }
}

/*
 * dictionary represents a Map that will collect objects keyed by strings.
 */
const emptyContent = Map();

export function dictionary(state = emptyContent, action = null) {
  const { type, payload } = action;
  switch (type) {
    case ActionTypes.LOAD_LANGUAGE:
      return state.set(payload.language, payload.content);
    default:
      return state;
  }
}

export function activeLanguage(state = 'English', action = null) {
  const { type, payload } = action;
  switch (type) {
    case ActionTypes.CHANGE_LANGUAGE:
      return payload;
    default:
      return state;
  }
}

/*
 * Filter is a simple string value that gets changed.
 */
export function filter(state = 'All', action = null) {
  const { type, payload } = action;
  switch (type) {
    case ActionTypes.SET_FILTER:
      return payload;
    default:
      return state;
  }
}
