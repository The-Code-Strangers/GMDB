import * as actions from '../action/movieActions';
//static import {MovieActionTypes} from '../action/movieActions';

// erste State wenn es für movies noch kein State gibt
const initialState = [];

// Initalisiert den State das erste mal mit initial state
// bekommt den alten state und die action 
// überprüft ob er was mit dem actiontype anfangen kann 
// speichert den wert im store ab (der key wird im root reducer bestimmt)
const moviesReducer = (state = initialState, action) => {
    switch (action.type) {
      case actions.MovieActionTypes.REPLACE_MOVIES_IN_STORE:
        return action.movies 
      case actions.MovieActionTypes.ADD_MOVIES_TO_STORE:
          return  [...action.movies, ...state]      
      default:
        return state
    }
  }

  export default moviesReducer;