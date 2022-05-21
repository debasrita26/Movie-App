//currect state will never be undefined so we will set it as empty,and next argument action will be passed
export default function movies(state = [], action){
    if(action.type==='ADD_MOVIES'){
        return action.movies;
    }
    return state;
}