import { FETCH_POSTS, FETCH_POST } from '../actions/index';
import { mapKeys } from 'lodash';

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_POST: {
      return {
        ...state,
        [action.payload.data.id]: action.payload.data,
      }
    }
    case FETCH_POSTS:
      return mapKeys(action.payload.data, 'id')
    default:
      return state;
  }
}