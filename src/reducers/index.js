import {ADD_MOVIES} from '../actions';

const initialMoviesState={
    list:[],
    favourites:[]
}

//currect state will never be undefined so we will set it as empty,and next argument action will be passed
export default function movies(state = initialMoviesState, action){
    if(action.type==='ADD_MOVIES'){
        return {
            ...state,
            list:action.movies
        }
    }
    return state;
}

