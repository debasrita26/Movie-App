import { combineReducers } from 'redux';
import {ADD_MOVIES,ADD_FAVOURITE,REMOVE_FROM_FAVOURITES,SET_SHOW_FAVOURITES,ADD_MOVIE_TO_LIST} from '../actions';

const initialMoviesState={
    list:[],
    favourites:[],
    showFavourites: false
}

//currect state will never be undefined so we will set it as empty,and next argument action will be passed
export function movies(state = initialMoviesState, action){
    console.log('MOVIES REDUCER');
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
        case REMOVE_FROM_FAVOURITES:
            const filteredArray=state.favourites.filter(
                movie=>movie.Title!== action.movie.Title
            );
            return{
                ...state,
                // adding the movie at the first index and then rest of the movies in the array
                favourites: filteredArray
            }
        case SET_SHOW_FAVOURITES:
            return{
                ...state,
                showFavourites: action.val
            }
        case ADD_MOVIE_TO_LIST:
            return{
                ...state,
                list: [action.movie, ...state.list],
            }
        default:
            return state;
    }
}

const initialSearchState={
    result:{},
    showSearchResults: false
};

export function search(state=initialSearchState,action){
    console.log('SEARCH REDUCER');

    return state;
}

//root reducer contains the movie reducer and the search reducer
const initialRootState={
    result:initialMoviesState,
    search:initialSearchState
};

// export default function rootReducer(state=initialRootState,action){
//     return{
//         movies: movies(state.movies,action),
//         search: search(state.search,action)
//     }
// }

export default combineReducers({
   movies,
   search
});