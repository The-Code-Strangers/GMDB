let nextTodoId = 0
export const saveMovies = movies => ({  // an action that creates a json object
  type: MovieActionTypes.ADD_MOVIES_TO_STORE,  // defining the type of the action
  movies: movies                        // defining the element of the action to be used
})

export const setVisibilityFilter = filter => ({
  type: 'SET_VISIBILITY_FILTER',
  filter: filter
})

export const toggleTodo = id => ({
  type: 'TOGGLE_TODO',
  id
})

export const MovieActionTypes = {
  ADD_MOVIES_TO_STORE: 'ADD_MOVIES_TO_STORE'
}