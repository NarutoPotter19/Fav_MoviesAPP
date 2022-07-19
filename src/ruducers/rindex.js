
import { ADD_MOVIES , ADD_FAVOURITE , REMOVE_FAVOURITE , SET_SHOW_FAVOURITE} from '../action/aindex';

const initialMoviesState ={
    list: [] ,
    favourites : [],
    showFavourites: false
}
export default function movies (state = initialMoviesState, action)
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
