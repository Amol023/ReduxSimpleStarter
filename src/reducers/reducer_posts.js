import { FETCH_POSTS } from '../actions/index';
import { mapKeys } from 'lodash';

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_POSTS:
      return mapKeys(action.payload.data, 'id')
    default:
      return state;
  }
}