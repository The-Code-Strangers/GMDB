import { combineReducers } from 'redux'
import movies from '../reducer/moviesReducer'
import reviews from '../reducer/reviewReducer'

export default combineReducers({
    movies,
    reviews
})




