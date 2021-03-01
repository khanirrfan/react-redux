import { FETCH_POSTS, NEW_POSTS, POSTS_ERROR } from './types';

import axios from 'axios';
export const fetchPosts = () => async dispatch => {
    try {
        const res = await axios.get('https://randomuser.me/api');
        dispatch({
            type: FETCH_POSTS,
            payload: res.data
        })
    } catch (error) {
        dispatch({
            type: POSTS_ERROR,
            payload: { msg: error.statusText, status: error.status }
        })
    }
}

export const createPost = () => async dispatch => {
    try {
        const res = await axios.post('/');
    } catch (error) {
        dispatch({
            type: POSTS_ERROR,
            payload: { msg: error.statusText, status: error.status }
        })
    }
}