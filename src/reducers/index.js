import {ADD_MOVIES,ADD_FAVOURITE} from '../actions';

const initialMoviesState={
    list:[],
    favourites:[]
}

//currect state will never be undefined so we will set it as empty,and next argument action will be passed
export default function movies(state = initialMoviesState, action){
    // if(action.type==='ADD_MOVIES'){
    //     return {
    //         ...state,
    //         list:action.movies
    //     }
    // }
    // return state;

    switch(action.type){
        case ADD_MOVIES:
            return{
                ...state,
                list:action.movies
            }
        case ADD_FAVOURITE:
            return{
                ...state,
                // adding the movie at the first index and then rest of the movies in the array
                favourites: [action.movie, ...state.favourites]
            }
        default:
            return state;
    }
}

