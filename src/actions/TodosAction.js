import { ADD_TODO, TOGGLE_CHECKED, DELETE_TODO, SET_FILTER, CLEAR_TODO, LOAD_DEFAULT } from '../constants/ActionTypes';

export function addTodo(text) {
  return {
    type: ADD_TODO,
    payload: {
      text,
      completed: false
    }
  };
}

export function toggleChecked(index) {
  return {
    type: TOGGLE_CHECKED,
    payload: {
      index
    }
  };
}

export function deleteTodo(index) {
  return {
    type: DELETE_TODO,
    payload: {
      index
    }
  };
}

export function setFilter(filter) {
  return {
    type: SET_FILTER,
    payload: filter
  };
}

export function clearTodo() {
  return {
    type: CLEAR_TODO
  };
}

export function loadDefault() {
  return {
    type: LOAD_DEFAULT,
    payload: {
      language: 'ENGLISH',
      content: {
        blobOne: 'my first Blob',
        section: {
          subOne: 'sub section one',
          subTwo: 'sub section two'
        }
      }
    }
  };
}
