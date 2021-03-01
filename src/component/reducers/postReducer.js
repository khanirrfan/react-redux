import { FETCH_POSTS, NEW_POSTS } from '../actions/types';

const initialState = {
    items:[],
    item: {},
    error: {}
}

export default function(state = initialState, action) {
    const {type, payload} = action;

    switch(type){
        case FETCH_POSTS:
            return {
                ...state,
                items: payload
            }
        case NEW_POSTS:
            return {
                ...state,
                item:payload
            }    
        default: 
        return state;     
    }
}
