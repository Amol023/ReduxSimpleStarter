import axios from 'axios';

export const FETCH_POSTS = 'FETCH_POSTS';
export const CREATE_POST = 'CREATE_POST';
export const FETCH_POST = 'FETCH_POST';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=arrewaah1234';

export const fetchPosts = (data) => {
  const request = axios.get(`${ROOT_URL}/posts/${API_KEY}`);

  return {
    type: FETCH_POSTS,
    payload: request,
  }
}

export const createPost = (data) => {
  const request = axios.post(`${ROOT_URL}/posts/${API_KEY}`, data);

  return {
    type: CREATE_POST,
    payload: request,
  }
}

export const fetchPost = (id) => {
  const request = axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`);

  return {
    type: FETCH_POST,
    payload: request,
  }
}