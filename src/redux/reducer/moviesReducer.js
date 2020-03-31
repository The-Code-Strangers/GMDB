import * as actions from '../action/movieActions';
//static import {MovieActionTypes} from '../action/movieActions';

// erste State wenn es für movies noch kein State gibt
const initialState = [];

// Initalisiert den State das erste mal mit initial state
// bekommt den alten state und die action 
// überprüft ob er was mit dem actiontype anfangen kann 
// 
const moviesReducer = (state = initialState, action) => {
    switch (action.type) {
      case actions.MovieActionTypes.ADD_MOVIES_TO_STORE:
        return {
            movies: action.movies
        }      
      default:
        return state
    }
  }

  export default moviesReducer;