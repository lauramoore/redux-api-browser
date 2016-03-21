import { LOAD_LANGUAGE } from '../constants/ActionTypes';


export function loadDefault() {
  return {
    type: LOAD_LANGUAGE,
    payload: {
      language: 'English',
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

/*
 * These next examples from REDUX Thunk
 * Middleware example
 * http://jsfiddle.net/8y8e427g/13/
 */
export function addReposAction(jsonResult) {
  return {
    type: 'ADD_TWEETS',
    payload: jsonResult
  };
}

/*
 * Provide a state change for when loading
 * starts and stops
 */
export function loadingChangedAction(loadingBoolean) {
  return {
    type: 'IS_LOADING',
    isLoading: loadingBoolean
  };
}

export function errorHandlerAction(err) {
  return {
    type: 'ERROR',
    payload: err
  };
}

/*
 * Redux-Thunk is middleware that introduces
 * asynch handling Actions that cannot update
 * state until some data is received from the web.
 * Thunk handles the injection of dispatch and state
 * so that this action can fire an appropriate
 * event based on result of web call
 */
export function loadReposAction() {
  /* wrapper function to be triggerd by Thunk */
  return function fetchRepos(dispatch) {
    const url = 'https://api.github.com/users/lauramoore/repos';
    /* notify app a loading event is occuring */
    dispatch(loadingChangedAction(true));
    /* create and return promise for the web call */
    return fetch(url)
    .then((result) => {
      /* change loading state again */
      dispatch(loadingChangedAction(false));
      if (result.status === 200) {
        return result.json;
      }
      throw result;
    })
    .then((jsonResult) => dispatch(addReposAction(jsonResult)))
    .catch((err) => dispatch(errorHandlerAction(err)));
  };
}
