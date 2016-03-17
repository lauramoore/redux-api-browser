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
