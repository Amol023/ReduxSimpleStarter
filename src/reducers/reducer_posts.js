import {FETCH_POSTS} from '../actions/index';

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_POSTS:
      return mapResponseToState(action.payload)
    default:
      return state;
  }
}

const mapResponseToState = (posts = []) => {
  posts.reduce((state, blog) => {
    state[blog.id] = blog;
    return state
  }, {})
}