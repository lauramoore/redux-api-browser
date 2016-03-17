import { Map } from 'immutable';
import * as ActionTypes from '../constants/ActionTypes.js';

/*
 * Each method here defines a Redux Store that will be available
 * as a state property named to match the method that creates it.
 * Each store needs to be intialized with an object that will meet
 * the expectations for data in the state.
 */

/*
 * The Dictionary Holds each language's content keyed by
 * language key.   State in this case is an immutable map
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

/*
 * Active Language is a simple String property as a store
 */
export function activeLanguage(state = 'English', action = null) {
  const { type, payload } = action;
  switch (type) {
    case ActionTypes.CHANGE_LANGUAGE:
      return payload;
    default:
      return state;
  }
}

