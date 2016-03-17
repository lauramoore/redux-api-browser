import { List, Map } from 'immutable';
import * as ActionTypes from '../constants/ActionTypes.js';

const todoSeed = List([
  Map({ text: 'my first todo', completed: false }),
  Map({ text: 'my second todo', completed: false })]);

const initialState = Map({ todos: todoSeed });

export function todos(state = initialState, action = null) {
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
    case ActionTypes.LOAD_DEFAULT:
      return state.set('content', Map(payload));
    default:
      return state;
  }
}

export function filter(state = 'All', action = null) {
  const { type, payload } = action;
  switch (type) {
    case ActionTypes.SET_FILTER:
      return payload;
    default:
      return state;
  }
}
