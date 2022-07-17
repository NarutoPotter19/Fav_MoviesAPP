
import { ADD_MOVIES } from '../action/aindex';

const initialMoviesState ={
    list: [] ,
    favourites : []
}
export default function movies (state = initialMoviesState, action)
{
    if(action.type===ADD_MOVIES){
        return {
            ...state,// using spread obj property
            list:action.movies

        };

    }
    return state;
}
