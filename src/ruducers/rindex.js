
import { combineReducers } from 'redux';
import { useReducer } from 'react';
import { ADD_MOVIES , ADD_FAVOURITE , REMOVE_FAVOURITE , SET_SHOW_FAVOURITE} from '../action/aindex';

const initialMoviesState ={
    list: [] ,
    favourites : [],
    showFavourites: false
}
export function movies (state = initialMoviesState, action)
{
  /*  if(action.type===ADD_MOVIES){
        return {
            ...state,// using spread obj property
            list:action.movies

        };

    }
    return state;
    */
    switch(action.type)
    {
        case ADD_MOVIES:
            return {
                ...state,// using spread obj property
                list:action.movies

            }
            case ADD_FAVOURITE:
            return {
                ...state,// using spread obj property
                favourites:[action.movie, ...state.favourites]

            }
            case REMOVE_FAVOURITE:
                
                    const filteredArray = state.favourites.filter(
                        movie=>movie.Title !== action.movie.Title
                    );

                    return {
                        ...state,
                        favourites : filteredArray
                    };

                    case SET_SHOW_FAVOURITE:
                        return {
                            ...state,
                            showFavourites: action.val
                        }
                
            default:
                return state;


    }
}
const initialSearchState = {
    result : {}
};
export function search (state =initialSearchState, action){
    return state;
}

const initialRootState = {
    movies : initialMoviesState,
    search :initialSearchState
};
/*export default function rootReducer(state=initialRootState,action){
    return {
        movies: movies(state.movies,action),
        search: search(state.search,action),
      //  users : useReducer(state,action)
    }
 }*/

 export default combineReducers({
    movies,
    search

 });
