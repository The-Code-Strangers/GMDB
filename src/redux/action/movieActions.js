export const saveMovies = movies => ({  // an action that creates a json object
  type: MovieActionTypes.REPLACE_MOVIES_IN_STORE,  // defining the type of the action
  movies                        // defining the element of the action to be used
})

export const addMovies = movies =>({
  type: MovieActionTypes.ADD_MOVIES_TO_STORE,
  movies
})



export const MovieActionTypes = {
  REPLACE_MOVIES_IN_STORE: 'REPLACE_MOVIES_IN_STORE',
  ADD_MOVIES_TO_STORE: 'ADD_MOVIES_TO_STORE'
}